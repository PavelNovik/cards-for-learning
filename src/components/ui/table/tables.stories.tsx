import type { Meta, StoryObj } from '@storybook/react'

import { Table, TableBody, TableData, TableHead, TableHeader, TableRow } from './table'

const meta = {
  component: Table,
  tags: ['autodocs'],
  title: 'Components/Tables',
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const data = [
  {
    cardsCount: 10,
    createdBy: 'John Doe',
    title: 'Project A',
    updated: '2023-07-07',
  },
  {
    cardsCount: 5,
    createdBy: 'Jane Smith',
    title: 'Project B',
    updated: '2023-07-06',
  },
  {
    cardsCount: 8,
    createdBy: 'Alice Johnson',
    title: 'Project C',
    updated: '2023-07-05',
  },
  {
    cardsCount: 3,
    createdBy: 'Bob Anderson',
    title: 'Project D',
    updated: '2023-07-07',
  },
  {
    cardsCount: 12,
    createdBy: 'Emma Davis',
    title: 'Project E',
    updated: '2023-07-04',
  },
]

export const WithSort: Story = {
  render: () => {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Cards</TableHeader>
            <TableHeader>Last Updated</TableHeader>
            <TableHeader>Created by</TableHeader>
            <TableHeader>Icons</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(item => (
            <TableRow key={item.title}>
              <TableData>{item.title}</TableData>
              <TableData>{item.cardsCount}</TableData>
              <TableData>{item.updated}</TableData>
              <TableData>{item.createdBy}</TableData>
              <TableData>icons...</TableData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  },
}
