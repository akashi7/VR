const productRoute = `pr`

interface productRouteInterface {
  label: string
  key: string
  children?: Array<productRouteInterface>
}

export const productDasboardRoutes: Array<productRouteInterface> = [
  {
    label: `방문 분석`,
    key: `#`,
    children: [
      { label: `방문 체류 시간`, key: `/${productRoute}/visit-duration` },
      { label: `방문 현황 (UV)`, key: `/${productRoute}/uv` },
      { label: `시간대별 방문 분포`, key: `/${productRoute}/visit-period` },
    ],
  },
  {
    label: '유입 분석',
    key: `##`,
    children: [
      { label: `검색 유입 현황`, key: `/${productRoute}/inflow-status` },
      { label: `웹 브라우저`, key: `/${productRoute}/lives` },
      { label: `운영 체제`, key: `/${productRoute}/livez` },
    ],
  },
]
