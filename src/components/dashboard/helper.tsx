import { Progress } from 'antd'

// eslint-disable-next-line react-refresh/only-export-components
export const distributionColums = [
  {
    title: '체류 시간',
    dataIndex: 'stayTime',
    key: 'stayTime',
    width: 200,
  },
  {
    title: '방문 횟수',
    dataIndex: 'numberOfVisits',
    key: 'numberOfVisits',
    width: 300,
  },
  {
    title: '비율',
    dataIndex: 'ratio',
    key: 'ratio',
    render: (text: number) => {
      return (
        <div>
          <Progress percent={text} className='custom-progress' />
        </div>
      )
    },
  },
]

export const AvearageColums = [
  {
    title: '날짜',
    dataIndex: 'date',
    key: 'date',
    width: 50,
  },
  {
    title: '평균 체류 시간',
    dataIndex: 'averageStayTime',
    key: 'averageStayTime',
    width: 100,
  },
  {
    title: '방문횟수',
    dataIndex: 'numberOfVisits',
    key: 'numberOfVisits',
    width: 100,
  },
  {
    title: '총 체류 시간',
    dataIndex: 'totalStayTime',
    key: 'totalStayTime',
    width: 200,
  },
]
