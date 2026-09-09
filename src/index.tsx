<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>منصة المهام والأرباح</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: sans-serif; }
    body { background: #0f172a; color: #f8fafc; padding: 20px; text-align: center; }
    .box { background: #1e293b; border: 1px solid #eab308; border-radius: 12px; padding: 20px; margin: 15px 0; }
    .btn { background: #eab308; color: #000; border: none; padding: 12px 20px; border-radius: 8px; font-weight: bold; width: 100%; margin: 8px 0; cursor: pointer; }
    .task { background: #334155; padding: 12px; border-radius: 8px; margin: 10px 0; display: flex; justify-content: space-between; align-items: center; }
  </style>
</head>
<body>
  <h2 style="color:#fbbf24;">منصة المهام والأرباح</h2>
  <div class="box">
    <div>الرصيد الحالي</div>
    <h1 style="color:#facc15; margin: 10px 0;">50.00 نقطة</h1>
  </div>

  <div class="box">
    <h3>المهام المتاحة</h3>
    <div class="task">
      <span>انضم لقناة التيليجرام</span>
      <button class="btn" style="width:auto;" onclick="window.open('https://t.me','_blank')">+15 نقطة</button>
    </div>
    <div class="task">
      <span>مشاهدة فيديو ترويجي</span>
      <button class="btn" style="width:auto;" onclick="window.open('https://youtube.com','_blank')">+10 نقاط</button>
    </div>
  </div>

  <button class="btn" style="background:#16a34a; color:#fff;" onclick="alert('الحد الأدنى للسحب 100 نقطة')">طلب سحب الرصيد</button>
</body>
</html>
