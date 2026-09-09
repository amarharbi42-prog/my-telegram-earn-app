import { useState } from 'react';

export function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'tasks' | 'invite' | 'withdraw'>('home');
  const [balance, setBalance] = useState<number>(50.0);
  const [tasks, setTasks] = useState([
    { id: 1, title: 'انضم إلى قناة الأخبار الرسمية', reward: 15, done: false, link: 'https://t.me' },
    { id: 2, title: 'التسجيل في منصة الشريك وتأكيد الإيميل', reward: 50, done: false, link: 'https://google.com' },
    { id: 3, title: 'مشاهدة فيديو ترويجي لمدة 30 ثانية', reward: 10, done: false, link: 'https://youtube.com' },
  ]);

  const handleCompleteTask = (id: number, reward: number, link: string) => {
    window.open(link, '_blank');
    setTasks(tasks.map(t => t.id === id ? { ...t, done: true } : t));
    setBalance(prev => prev + reward);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0f172a',
      color: '#f8fafc',
      fontFamily: 'sans-serif',
      direction: 'rtl',
      paddingBottom: '80px'
    }}>
      <div style={{
        padding: '20px',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
        borderBottom: '1px solid #334155'
      }}>
        <h2 style={{ margin: '0 0 10px 0', fontSize: '20px', color: '#fbbf24' }}>منصة المهام والأرباح</h2>
        <div style={{
          backgroundColor: '#1e293b',
          padding: '15px',
          borderRadius: '16px',
          border: '1px solid #eab308',
          display: 'inline-block',
          minWidth: '200px'
        }}>
          <span style={{ fontSize: '13px', color: '#94a3b8' }}>الرصيد الكلي المتاح</span>
          <div style={{ fontSize: '26px', fontWeight: 'bold', color: '#facc15', marginTop: '4px' }}>
            {balance.toFixed(2)} <span style={{ fontSize: '15px', color: '#f8fafc' }}>نقطة</span>
          </div>
        </div>
      </div>

      <div style={{ padding: '16px' }}>
        {activeTab === 'home' && (
          <div>
            <div style={{
              backgroundColor: '#1e293b',
              padding: '16px',
              borderRadius: '12px',
              marginBottom: '16px',
              border: '1px solid #334155'
            }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', color: '#38bdf8' }}>👋 مرحباً بك!</h3>
              <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6', margin: 0 }}>
                أكمل المهام السريعة اليومية، واجمع النقاط لتحويلها إلى رصيد حقيقي وسحبها عبر المحافظ المتاحة.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '12px' }}>
              <button
                onClick={() => setActiveTab('tasks')}
                style={{
                  backgroundColor: '#2563eb',
                  border: 'none',
                  color: 'white',
                  padding: '14px',
                  borderRadius: '10px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                📋 تصفح المهام
              </button>
              <button
                onClick={() => setActiveTab('withdraw')}
                style={{
                  backgroundColor: '#16a34a',
                  border: 'none',
                  color: 'white',
                  padding: '14px',
                  borderRadius: '10px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                💳 طلب سحب
              </button>
            </div>
          </div>
        )}

        {activeTab === 'tasks' && (
          <div>
            <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>المهام المتاحة</h3>
            {tasks.map(task => (
              <div key={task.id} style={{
                backgroundColor: '#1e293b',
                padding: '14px',
                borderRadius: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '10px',
                border: '1px solid #334155'
              }}>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 'bold' }}>{task.title}</div>
                  <div style={{ fontSize: '12px', color: '#fbbf24', marginTop: '4px' }}>+{task.reward} نقطة</div>
                </div>
                <button
                  onClick={() => !task.done && handleCompleteTask(task.id, task.reward, task.link)}
                  disabled={task.done}
                  style={{
                    backgroundColor: task.done ? '#334155' : '#eab308',
                    color: task.done ? '#94a3b8' : '#0f172a',
                    border: 'none',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    fontSize: '12px',
                    cursor: task.done ? 'default' : 'pointer'
                  }}
                >
                  {task.done ? 'مكتملة ✓' : 'تنفيذ'}
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'invite' && (
          <div style={{ textAlign: 'center', padding: '20px 10px' }}>
            <h3 style={{ fontSize: '18px', color: '#fbbf24' }}>نظام الإحالة</h3>
            <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
              شارك رابط الدعوة الخاص بك واحصل على 20 نقطة عن كل صديق ينضم ويبدأ تنفيذ المهام.
            </p>
            <div style={{
              backgroundColor: '#1e293b',
              padding: '12px',
              borderRadius: '8px',
              border: '1px dashed #eab308',
              margin: '16px 0',
              fontSize: '12px',
              color: '#38bdf8'
            }}>
              https://t.me/Ai_Pro_2026_bot?start=ref1234
            </div>
            <button
              onClick={() => alert('تم نسخ رابط الإحالة!')}
              style={{
                backgroundColor: '#fbbf24',
                color: '#0f172a',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              نسخ الرابط
            </button>
          </div>
        )}

        {activeTab === 'withdraw' && (
          <div>
            <h3 style={{ fontSize: '16px', marginBottom: '12px' }}>طلب السحب</h3>
            <div style={{ backgroundColor: '#1e293b', padding: '16px', borderRadius: '12px', border: '1px solid #334155' }}>
              <div style={{ marginBottom: '12px' }}>
                <label style={{ display: 'block', fontSize: '12px', color: '#94a3b8', marginBottom: '6px' }}>طريقة السحب</label>
                <select style={{ width: '100%', padding: '10px', borderRadius: '8px', backgroundColor: '#0f172a', color: '#fff', border: '1px solid #475569' }}>
                  <option>USDT (TRC20 / TON)</option>
                  <option>Payeer</option>
                  <option>شحن رصيد هاتف</option>
                </select>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <label style={{ display: 'block', fontSize: '12px', color: '#94a3b8', marginBottom: '6px' }}>عنوان المحفظة / الرقم</label>
                <input
                  type="text"
                  placeholder="أدخل المعرف أو الرقم..."
                  style={{ width: '93%', padding: '10px', borderRadius: '8px', backgroundColor: '#0f172a', color: '#fff', border: '1px solid #475569' }}
                />
              </div>
              <div style={{ fontSize: '12px', color: '#f87171', marginBottom: '12px' }}>
                الحد الأدنى للسحب هو 100 نقطة.
              </div>
              <button
                onClick={() => alert('الرصيد أقل من الحد الأدنى للسحب!')}
                style={{
                  width: '100%',
                  backgroundColor: '#16a34a',
                  color: '#fff',
                  border: 'none',
                  padding: '12px',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                تأكيد السحب
              </button>
            </div>
          </div>
        )}
      </div>

      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#1e293b',
        borderTop: '1px solid #334155',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '10px 0'
      }}>
        <button
          onClick={() => setActiveTab('home')}
          style={{ background: 'none', border: 'none', color: activeTab === 'home' ? '#fbbf24' : '#94a3b8', fontSize: '12px', cursor: 'pointer' }}
        >
          🏠 الرئيسية
        </button>
        <button
          onClick={() => setActiveTab('tasks')}
          style={{ background: 'none', border: 'none', color: activeTab === 'tasks' ? '#fbbf24' : '#94a3b8', fontSize: '12px', cursor: 'pointer' }}
        >
          📋 المهام
        </button>
        <button
          onClick={() => setActiveTab('invite')}
          style={{ background: 'none', border: 'none', color: activeTab === 'invite' ? '#fbbf24' : '#94a3b8', fontSize: '12px', cursor: 'pointer' }}
        >
          👥 الإحالة
        </button>
        <button
          onClick={() => setActiveTab('withdraw')}
          style={{ background: 'none', border: 'none', color: activeTab === 'withdraw' ? '#fbbf24' : '#94a3b8', fontSize: '12px', cursor: 'pointer' }}
        >
          💳 السحب
        </button>
      </div>
    </div>
  );
}
