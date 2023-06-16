'use client'

import { Dropdown } from 'flowbite-react'

export default function DropDown() {
  return (
    <div className="flex items-center gap-4">
      <Dropdown label="Tipos" size="sm" color={'purple'}>
        <Dropdown.Item value={'Medicamento'}>Medicamento</Dropdown.Item>
        <Dropdown.Item>Cosmetico</Dropdown.Item>
        <Dropdown.Item>Outros</Dropdown.Item>
      </Dropdown>
    </div>
  )
}
