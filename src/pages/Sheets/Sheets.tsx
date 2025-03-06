import React from 'react'
import { Table } from '@mui/joy';
export default function Sheets() {
  return (
    <div>
<Table aria-label="basic table" color='neutral' sx={styles}>
      <thead>
        <tr>
          <th style={{ width: '40%' }}>Entrada de Valor (R$)</th>
          <th>Valor</th>
          <th>Data&nbsp;</th>
          <th>Categoria&nbsp;</th>
          <th>Observação&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Salario</td>
          <td>R$ 2,000</td>
          <td>03/03/2003</td>
          <td>Entrada</td>
          <td>Salario mês março</td>
        </tr>
        <tr>
          <td>Ice cream sandwich</td>
          <td>237</td>
          <td>9</td>
          <td>37</td>
          <td>4.3</td>
        </tr>
        <tr>
          <td>Eclair</td>
          <td>262</td>
          <td>16</td>
          <td>24</td>
          <td>6</td>
        </tr>
        <tr>
          <td>Cupcake</td>
          <td>305</td>
          <td>3.7</td>
          <td>67</td>
          <td>4.3</td>
        </tr>
        <tr>
          <td>Gingerbread</td>
          <td>356</td>
          <td>16</td>
          <td>49</td>
          <td>3.9</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

const styles = {
  color: 'white',
}
