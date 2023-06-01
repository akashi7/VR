const productRoute = `pr`

interface productRouteInterface {
  label: string
  key: string
  children?: Array<productRouteInterface>
}

export const productDasboardRoutes: Array<productRouteInterface> = [
  {
    label: `방문 분석`,
    key: `/${productRoute}/group-animal/`,
    children: [
      { label: `방문 체류 시간`, key: `/${productRoute}/visit-duration` },
      { label: `방문 체류 시간`, key: `/${productRoute}/visit-durations` },
      { label: `방문 체류 시간`, key: `/${productRoute}/visit-durationz` },
    ],
  },
  {
    label: '유입 분석',
    key: `/${productRoute}/group/feed/`,
    children: [{ label: `유입 분석`, key: `/${productRoute}/live` }],
  },
]
