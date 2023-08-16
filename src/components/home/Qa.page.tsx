/* eslint-disable @typescript-eslint/no-explicit-any */
import { CaretRightOutlined } from '@ant-design/icons'
import { Collapse } from 'antd'
import { FC, ReactElement } from 'react'

const QaPage: FC = (): ReactElement => {
  const { Panel } = Collapse

  const customExpandIcon = (props: any) => {
    const { isActive } = props
    return <CaretRightOutlined rotate={isActive ? 90 : 270} />
  }

  return (
    <div className='h-[100%] bg-white w-[100%] p-5 mt-[50px] '>
      <div className='mx-auto lg:w-[60%] w-full md:w-[80%]'>
        <div className='mt-5'>
          <h2 className='text-lg font-bold  '>공지 사항</h2>
          <div className='mt-6'>
            <Collapse
              style={{ border: 'none', borderTop: 'none' }}
              expandIconPosition='right'
              expandIcon={customExpandIcon}
            >
              <Panel
                header='2022년 12월 30일 공지 사항 안내해 드립니다.'
                key='1'
              >
                <p>
                  [공지] 2022년 12월 30일 공지 사항 안내해 드립니다. 안녕하세요,
                  헬로 에이알입니다. 새로운 이용약관 적용에 대한 사전 안내
                  말씀드립니다. 앞으로도 회원 여러분께서 안전하고 편리하게 헬로
                  에이알 서비스를 이용하실 수 있도록 최선을 다하겠습니다.
                  감사합니다.
                </p>
              </Panel>
              <Panel
                header='2022년 12월 30일 공지 사항 안내해 드립니다.'
                key='2'
                style={{}}
              >
                <p>
                  [공지] 2022년 12월 30일 공지 사항 안내해 드립니다. 안녕하세요,
                  헬로 에이알입니다. 새로운 이용약관 적용에 대한 사전 안내
                  말씀드립니다. 앞으로도 회원 여러분께서 안전하고 편리하게 헬로
                  에이알 서비스를 이용하실 수 있도록 최선을 다하겠습니다.
                  감사합니다.
                </p>
              </Panel>
              <Panel
                header='2022년 12월 30일 공지 사항 안내해 드립니다.'
                key='3'
              >
                <p>
                  [공지] 2022년 12월 30일 공지 사항 안내해 드립니다. 안녕하세요,
                  헬로 에이알입니다. 새로운 이용약관 적용에 대한 사전 안내
                  말씀드립니다. 앞으로도 회원 여러분께서 안전하고 편리하게 헬로
                  에이알 서비스를 이용하실 수 있도록 최선을 다하겠습니다.
                  감사합니다.
                </p>
              </Panel>
              <Panel
                header='2022년 12월 30일 공지 사항 안내해 드립니다.'
                key='4'
              >
                <p>
                  [공지] 2022년 12월 30일 공지 사항 안내해 드립니다. 안녕하세요,
                  헬로 에이알입니다. 새로운 이용약관 적용에 대한 사전 안내
                  말씀드립니다. 앞으로도 회원 여러분께서 안전하고 편리하게 헬로
                  에이알 서비스를 이용하실 수 있도록 최선을 다하겠습니다.
                  감사합니다.
                </p>
              </Panel>
              <Panel
                header='2022년 12월 30일 공지 사항 안내해 드립니다.'
                key='5'
                style={{
                  borderBottom: 'none',
                }}
              >
                <p>
                  [공지] 2022년 12월 30일 공지 사항 안내해 드립니다. 안녕하세요,
                  헬로 에이알입니다. 새로운 이용약관 적용에 대한 사전 안내
                  말씀드립니다. 앞으로도 회원 여러분께서 안전하고 편리하게 헬로
                  에이알 서비스를 이용하실 수 있도록 최선을 다하겠습니다.
                  감사합니다.
                </p>
              </Panel>
            </Collapse>
          </div>
        </div>
        <div className='mt-10'>
          <h2 className='text-lg font-bold  '>자주 묻는 질문</h2>
        </div>
        <div className='mt-7'>
          <Collapse
            style={{ border: 'none', borderTop: 'none' }}
            expandIconPosition='right'
            expandIcon={customExpandIcon}
          >
            <Panel header='Hello AR은 어떤 서비스인가요?' key='1'>
              <p>
                헬로 에이알은 AR 기술을 통해 고객님들의 제품 판매를 돕습니다.
                감사합니다.
              </p>
            </Panel>
            <Panel header='Hello AR은 어떤 서비스인가요?' key='2'>
              <p>
                헬로 에이알은 AR 기술을 통해 고객님들의 제품 판매를 돕습니다.
                감사합니다.
              </p>
            </Panel>
            <Panel header='Hello AR은 어떤 서비스인가요?' key='3'>
              <p>
                헬로 에이알은 AR 기술을 통해 고객님들의 제품 판매를 돕습니다.
                감사합니다.
              </p>
            </Panel>
            <Panel header='Hello AR은 어떤 서비스인가요?' key='4'>
              <p>
                헬로 에이알은 AR 기술을 통해 고객님들의 제품 판매를 돕습니다.
                감사합니다.
              </p>
            </Panel>
            <Panel
              header='Hello AR은 어떤 서비스인가요?'
              key='5'
              style={{
                borderBottom: 'none',
              }}
            >
              <p>
                헬로 에이알은 AR 기술을 통해 고객님들의 제품 판매를 돕습니다.
                감사합니다.
              </p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </div>
  )
}

export default QaPage
