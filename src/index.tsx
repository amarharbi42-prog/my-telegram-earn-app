<!doctype html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>منصة المهام والأرباح</title>
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
      html, body { width: 100%; height: 100%; background-color: #0f172a; color: #f8fafc; overflow-x: hidden; }
      #app-container { min-height: 100vh; display: flex; flex-direction: column; justify-content: space-between; padding-bottom: 75px; }
      .header { padding: 20px 15px; text-align: center; background: #1e293b; border-bottom: 1px solid #334155; }
      .header h2 { font-size: 19px; color: #fbbf24; margin-bottom: 12px; }
      .balance-box { background: #0f172a; border: 1px solid #eab308; border-radius: 14px; padding: 12px 20px; display: inline-block; min-width: 210px; }
      .balance-title { font-size: 12px; color: #94a3b8; }
      .balance-val { font-size: 24px; font-weight: bold; color: #facc15; margin-top: 4px; }
      .main-content { padding: 16px; flex: 1; }
      .card { background: #1e293b; border: 1px solid #334155; border-radius: 12px; padding: 15px; margin-bottom: 14px; }
      .card h3 { color: #38bdf8; font-size: 15px; margin-bottom: 6px; }
      .card p { color: #cbd5e1; font-size: 13px; line-height: 1.5; }
      .grid-btns { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px; }
      .btn { border: none; border-radius: 8px; padding: 12px; font-weight: bold; font-size: 13px; cursor: pointer; color: #fff; width: 100%; }
      .btn-blue { background: #2563eb; }
      .btn-green { background: #16a34a; }
      .btn-gold { background: #eab308; color: #0f172a; }
      .task-row { background: #1e293b; border: 1px solid #334155; border-radius: 10px; padding: 12px 14px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
      .task-title { font-size: 13px; font-weight: 600; }
      .task-reward { font-size: 11px; color: #fbbf24; margin-top: 3px; }
      .nav-footer { position: fixed; bottom: 0; left: 0; right: 0; background: #1e293b; border-top: 1px solid #334155; display: flex; justify-content: space-around; padding: 10px 0; z-index: 99; }
      .nav-item { background: none; border: none; color: #94a3b8; font-size: 12px; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 3px; }
      .nav-item.active { color: #fbbf24; font-weight: bold; }
    </style>
  </head>
  <body>
    <div id="app-container">
      <div class="header">
        <h2>منصة المهام والأرباح</h2>
        <div class="balance-box">
          <div class="balance-title">الرصيد المتاح</div>
          <div class="balance-val" id="balanceText">50.00 <span style="font-size: 13px; color: #f8fafc;">نقطة</span></div>
        </div>
      </div>

      <div class="main-content" id="viewArea"></div>

      <div class="nav-footer">
        <button class="nav-item active" id="tab-home" onclick="renderTab('home')">🏠 الرئيسية</button>
        <button class="nav-item" id="tab-tasks" onclick="renderTab('tasks')">📋 المهام</button>
        <button class="nav-item" id="tab-invite" onclick="renderTab('invite')">👥 الإحالة</button>
        <button class="nav-item" id="tab-withdraw" onclick="renderTab('withdraw')">💳 السحب</button>
      </div>
    </div>

    <script>
      let userBalance = 50.0;
      const tasksList = [
        { id: 1, title: 'الانضمام لقناة الأخبار', reward: 15, link: 'https://t.me', done: false },
        { id: 2, title: 'التسجيل في منصة الشريك', reward: 50, link: 'https://google.com', done: false },
        { id: 3, title: 'مشاهدة إعلان 30 ثانية', reward: 10, link: 'https://youtube.com', done: false }
      ];

      function updateBalanceView() {
        document.getElementById('balanceText').innerHTML = userBalance.toFixed(2) + ' <span style="font-size: 13px; color: #f8fafc;">نقطة</span>';
      }

      function execTask(id, reward, link) {
        window.open(link, '_blank');
        const t = tasksList.find(item => item.id === id);
        if (t && !t.done) {
          t.done = true;
          userBalance += reward;
          updateBalanceView();
          renderTab('tasks');
        }
      }

      function renderTab(name) {
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        const activeBtn = document.getElementById('tab-' + name);
        if (activeBtn) activeBtn.classList.add('active');

        const view = document.getElementById('viewArea');
        if (name === 'home') {
          view.innerHTML = `
            <div class="card">
              <h3>👋 أهلاً بك في منصتك</h3>
              <p>قم بإنجاز المهام اليومية، واكسب النقاط واستبدلها برصيد حقيقي.</p>
            </div>
            <div class="grid-btns">
              <button class="btn btn-blue" onclick="renderTab('tasks')">📋 تصفح المهام</button>
              <button class="btn btn-green" onclick="renderTab('withdraw')">💳 طلب سحب</button>
            </div>`;
        } else if (name === 'tasks') {
          let rows = '<h3 style="font-size: 15px; margin-bottom: 12px;">قائمة المهام</h3>';
          tasksList.forEach(t => {
            rows += `
              <div class="task-row">
                <div>
                  <div class="task-title">${t.title}</div>
                  <div class="task-reward">+${t.reward} نقطة</div>
                </div>
                <button class="btn ${t.done ? '' : 'btn-gold'}" style="width: auto; padding: 7px 14px; font-size: 12px; ${t.done ? 'background:#334155;color:#94a3b8;' : ''}" onclick="${t.done ? '' : `execTask(${t.id}, ${t.reward}, '${t.link}')`}">
                  ${t.done ? 'منجزة ✓' : 'تنفيذ'}
                </button>
              </div>`;
          });
          view.innerHTML = rows;
        } else if (name === 'invite') {
          view.innerHTML = `
            <div class="card" style="text-align: center;">
              <h3 style="color: #fbbf24;">نظام الإحالة</h3>
              <p style="margin-top: 6px;">احصل على 20 نقطة لكل صديق يسجل من خلالك.</p>
              <div style="background: #0f172a; border: 1px dashed #eab308; padding: 10px; border-radius: 8px; margin: 12px 0; font-size: 12px; color: #38bdf8;">
                https://t.me/Ai_Pro_2026_bot?start=ref1234
              </div>
              <button class="btn btn-gold" onclick="alert('تم نسخ الرابط!')">نسخ الرابط</button>
            </div>`;
        } else if (name === 'withdraw') {
          view.innerHTML = `
            <div class="card">
              <h3 style="margin-bottom: 10px;">سحب الأرباح</h3>
              <div style="margin-bottom: 10px;">
                <label style="font-size: 12px; color: #94a3b8; display: block; margin-bottom: 4px;">طريقة السحب</label>
                <select style="width: 100%; padding: 8px; border-radius: 6px; background: #0f172a; color: #fff; border: 1px solid #475569;">
                  <option>USDT (TON / TRC20)</option>
                  <option>Payeer</option>
                  <option>فليكسي (رصيد هاتف)</option>
                </select>
              </div>
              <div style="margin-bottom: 10px;">
                <label style="font-size: 12px; color: #94a3b8; display: block; margin-bottom: 4px;">عنوان المحفظة أو الرقم</label>
                <input type="text" placeholder="أدخل العنوان هنا..." style="width: 100%; padding: 8px; border-radius: 6px; background: #0f172a; color: #fff; border: 1px solid #475569;" />
              </div>
              <p style="font-size: 11px; color: #f87171; margin-bottom: 10px;">الحد الأدنى للسحب هو 100 نقطة.</p>
              <button class="btn btn-green" onclick="alert('الرصيد غير كافٍ للحد الأدنى!')">تأكيد الطلب</button>
            </div>`;
        }
      }

      document.addEventListener('DOMContentLoaded', () => {
        renderTab('home');
      });
    </script>
  </body>
</html>
