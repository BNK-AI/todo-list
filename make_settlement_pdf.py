from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak
)
from datetime import date

pdfmetrics.registerFont(TTFont("Malgun", "C:/Windows/Fonts/malgun.ttf"))
pdfmetrics.registerFont(TTFont("MalgunBd", "C:/Windows/Fonts/malgunbd.ttf"))

TOTAL = 1_867_600
COMMISSION_RATE = 0.30
commission_incl_vat = int(round(TOTAL * COMMISSION_RATE))  # 560,280
supply_value = int(commission_incl_vat // 1.1)              # 509,345
vat = commission_incl_vat - supply_value                    # 50,935
balance = TOTAL - commission_incl_vat                       # 1,307,320

def won(n):
    return f"{n:,}원"

out_path = r"C:\Users\BNK-1\Desktop\todo-list\.claude\worktrees\distracted-tereshkova-02d692\정산표_주식회사슬래이_공구수수료.pdf"

doc = SimpleDocTemplate(
    out_path, pagesize=A4,
    leftMargin=20*mm, rightMargin=20*mm,
    topMargin=20*mm, bottomMargin=20*mm,
    title="공구 수수료 정산표", author="탐뷰티"
)

styles = getSampleStyleSheet()
title_style = ParagraphStyle(
    "title", parent=styles["Title"],
    fontName="MalgunBd", fontSize=20, leading=26, alignment=1, spaceAfter=6
)
sub_style = ParagraphStyle(
    "sub", parent=styles["Normal"],
    fontName="Malgun", fontSize=10, leading=14, alignment=1, textColor=colors.grey
)
h2_style = ParagraphStyle(
    "h2", parent=styles["Heading2"],
    fontName="MalgunBd", fontSize=13, leading=18, spaceBefore=14, spaceAfter=6,
    textColor=colors.HexColor("#222222")
)
body_style = ParagraphStyle(
    "body", parent=styles["Normal"],
    fontName="Malgun", fontSize=10.5, leading=16
)
note_style = ParagraphStyle(
    "note", parent=styles["Normal"],
    fontName="Malgun", fontSize=9.5, leading=14, textColor=colors.HexColor("#555555")
)

story = []

story.append(Paragraph("공구 수수료 정산표", title_style))
story.append(Paragraph(f"정산일: {date.today().isoformat()}  /  수취인: (주)슬래이", sub_style))
story.append(Spacer(1, 8*mm))

# 1. 정산 개요
story.append(Paragraph("1. 정산 개요", h2_style))
overview_data = [
    ["구분", "금액", "비고"],
    ["최종 정산 금액 (총액)", won(TOTAL), "-"],
    ["공구 수수료율", "30%", "VAT 포함 기준"],
    ["공구 수수료 (VAT 포함)", won(commission_incl_vat), f"{TOTAL:,} × 30%"],
]
t1 = Table(overview_data, colWidths=[60*mm, 50*mm, 60*mm])
t1.setStyle(TableStyle([
    ("FONTNAME", (0,0), (-1,-1), "Malgun"),
    ("FONTNAME", (0,0), (-1,0), "MalgunBd"),
    ("FONTSIZE", (0,0), (-1,-1), 10),
    ("BACKGROUND", (0,0), (-1,0), colors.HexColor("#2D2D2D")),
    ("TEXTCOLOR", (0,0), (-1,0), colors.white),
    ("ALIGN", (1,1), (1,-1), "RIGHT"),
    ("ALIGN", (0,0), (-1,0), "CENTER"),
    ("ALIGN", (2,1), (2,-1), "CENTER"),
    ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
    ("GRID", (0,0), (-1,-1), 0.4, colors.HexColor("#BBBBBB")),
    ("ROWBACKGROUNDS", (0,1), (-1,-1), [colors.white, colors.HexColor("#F7F7F7")]),
    ("LEFTPADDING", (0,0), (-1,-1), 8),
    ("RIGHTPADDING", (0,0), (-1,-1), 8),
    ("TOPPADDING", (0,0), (-1,-1), 7),
    ("BOTTOMPADDING", (0,0), (-1,-1), 7),
]))
story.append(t1)

# 2. 수수료 세금계산서 분리
story.append(Paragraph("2. 수수료 공급가액 · 부가세 분리", h2_style))
tax_data = [
    ["항목", "금액", "산식"],
    ["공급가액", won(supply_value), f"{commission_incl_vat:,} ÷ 1.1"],
    ["부가세 (10%)", won(vat), ""],
    ["합계 (VAT 포함)", won(commission_incl_vat), "공급가액 + 부가세"],
]
t2 = Table(tax_data, colWidths=[55*mm, 55*mm, 60*mm])
t2.setStyle(TableStyle([
    ("FONTNAME", (0,0), (-1,-1), "Malgun"),
    ("FONTNAME", (0,0), (-1,0), "MalgunBd"),
    ("FONTNAME", (0,-1), (-1,-1), "MalgunBd"),
    ("FONTSIZE", (0,0), (-1,-1), 10),
    ("BACKGROUND", (0,0), (-1,0), colors.HexColor("#2D2D2D")),
    ("TEXTCOLOR", (0,0), (-1,0), colors.white),
    ("BACKGROUND", (0,-1), (-1,-1), colors.HexColor("#FFF5D6")),
    ("ALIGN", (0,0), (-1,0), "CENTER"),
    ("ALIGN", (1,1), (1,-1), "RIGHT"),
    ("ALIGN", (2,1), (2,-1), "CENTER"),
    ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
    ("GRID", (0,0), (-1,-1), 0.4, colors.HexColor("#BBBBBB")),
    ("LEFTPADDING", (0,0), (-1,-1), 8),
    ("RIGHTPADDING", (0,0), (-1,-1), 8),
    ("TOPPADDING", (0,0), (-1,-1), 7),
    ("BOTTOMPADDING", (0,0), (-1,-1), 7),
]))
story.append(t2)

# 3. 지급 금액
story.append(Paragraph("3. 지급 금액", h2_style))
pay_data = [
    ["구분", "금액", "비고"],
    ["(주)슬래이 지급액 (공구 수수료)", won(commission_incl_vat), "VAT 포함"],
]
t3 = Table(pay_data, colWidths=[60*mm, 50*mm, 60*mm])
t3.setStyle(TableStyle([
    ("FONTNAME", (0,0), (-1,-1), "Malgun"),
    ("FONTNAME", (0,0), (-1,0), "MalgunBd"),
    ("FONTSIZE", (0,0), (-1,-1), 10),
    ("BACKGROUND", (0,0), (-1,0), colors.HexColor("#2D2D2D")),
    ("TEXTCOLOR", (0,0), (-1,0), colors.white),
    ("ALIGN", (0,0), (-1,0), "CENTER"),
    ("ALIGN", (1,1), (1,-1), "RIGHT"),
    ("ALIGN", (2,1), (2,-1), "CENTER"),
    ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
    ("GRID", (0,0), (-1,-1), 0.4, colors.HexColor("#BBBBBB")),
    ("ROWBACKGROUNDS", (0,1), (-1,-1), [colors.white, colors.HexColor("#F7F7F7")]),
    ("LEFTPADDING", (0,0), (-1,-1), 8),
    ("RIGHTPADDING", (0,0), (-1,-1), 8),
    ("TOPPADDING", (0,0), (-1,-1), 7),
    ("BOTTOMPADDING", (0,0), (-1,-1), 7),
]))
story.append(t3)

story.append(Spacer(1, 6*mm))
story.append(Paragraph(
    "※ 수수료율 30%는 VAT 포함 기준이며, 세금계산서 발행 시 공급가액과 부가세를 분리하여 표기합니다.<br/>"
    "※ 원 단위 이하 반올림 처리로 ±1원의 단수 차이가 발생할 수 있습니다.",
    note_style
))

doc.build(story)
print(f"PDF 생성 완료: {out_path}")
print(f"- 총액: {won(TOTAL)}")
print(f"- 수수료(VAT 포함): {won(commission_incl_vat)}")
print(f"  · 공급가액: {won(supply_value)}")
print(f"  · 부가세:   {won(vat)}")
