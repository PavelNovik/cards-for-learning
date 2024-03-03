import { useState } from 'react'

import { Button, Input } from '@/components/ui'
import { Container } from '@/components/ui/container/container'
import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useGetDecksQuery } from '@/services/base-api'

export const DecksPage = () => {
  const [search, setSearch] = useState('')

  const { data, isLoading } = useGetDecksQuery({
    name: search,
  })

  if (isLoading) {
    return <div>LOADING...</div>
  }

  return (
    <Container>
      <Input onChange={e => setSearch(e.currentTarget.value)} />
      <Button>Search</Button>
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
          {data?.items.map(item => (
            <TableRow key={item.id}>
              <TableData>{item.name}</TableData>
              <TableData>{item.cardsCount}</TableData>
              <TableData>{new Date(item.updated).toLocaleDateString()}</TableData>
              <TableData>{item.author.name}</TableData>
              <TableData>icons...</TableData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  )
}
