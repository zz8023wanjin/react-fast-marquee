import Marquee from '../../../src/index'
import './App.css'

function App() {
  const noticeData = [
    '用户**1111刚刚已购买该套餐',
    '用户**2222刚刚已购买该套餐',
    '用户**3333刚刚已购买该套餐',
    '用户**4444刚刚已购买该套餐',
    '用户**5555刚刚已购买该套餐',
    '用户**6666刚刚已购买该套餐',
    '用户**7777刚刚已购买该套餐',
    '用户**8888刚刚已购买该套餐',
  ]

  return (
    <>
      <div style={{ height: '200px' }}>
        <Marquee
          direction='up'
          // gradient={true}
          speed={100}
          style={{
            height: '220px',
          }}
        >
          {noticeData.map((item) => (
            <span>{item}</span>
          ))}
        </Marquee>
      </div>
    </>
  )
}

export default App
