export interface Reference {
  name: string
  title: string
  company: string
  phone: string
  email?: string
  relationship: string
}

export const references: Reference[] = [
  {
    name: 'Sokneang Ty',
    title: 'Production Manager / UXUI Lead',
    company: 'Everlast & Apps Dev Co., Ltd',
    phone: '+855 12 789 710',
    email: 'sokneang0110@gmail.com',
    relationship: 'Former colleague and direct report',
  },
  {
    name: 'Thon Pisey ',
    title: 'Personal Assistant to Managing Directors',
    company: 'Group Mall under OCIC',
    email: '',
    phone: '077804910/0962954997',
    relationship: 'Former colleague',
  },
]
