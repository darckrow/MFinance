import React from 'react';
import { Box, Paper, Grid, Typography, List, ListItem, ListItemText } from '@mui/material';

export default function Home() {
  // Dados fictícios para demonstração
  const fundosInvestimento = [
    { nome: 'Fundo A', rentabilidade: '5% a.a.' },
    { nome: 'Fundo B', rentabilidade: '7% a.a.' },
    { nome: 'Fundo C', rentabilidade: '6% a.a.' }
  ];

  const entradas = [
    { descricao: 'Salário', valor: 'R$ 5.000,00' },
    { descricao: 'Investimentos', valor: 'R$ 1.200,00' },
    { descricao: 'Freelance', valor: 'R$ 800,00' },
    { descricao: 'Bônus', valor: 'R$ 1.500,00' },
    { descricao: 'Outros', valor: 'R$ 300,00' },
  ];

  const saidas = [
    { descricao: 'Aluguel', status: 'Pago' },
    { descricao: 'Conta de Luz', status: 'Pendente' },
    { descricao: 'Supermercado', status: 'Pago' },
    { descricao: 'Internet', status: 'Pago' },
    { descricao: 'Transporte', status: 'Pendente' },
  ];

  const balancoMensal = [
    { mes: 'Janeiro', entrada: 'R$ 6.000,00', saida: 'R$ 4.500,00' },
    { mes: 'Fevereiro', entrada: 'R$ 6.200,00', saida: 'R$ 4.800,00' },
    { mes: 'Março', entrada: 'R$ 6.500,00', saida: 'R$ 5.000,00' },
    { mes: 'Abril', entrada: 'R$ 6.700,00', saida: 'R$ 5.200,00' },
    { mes: 'Maio', entrada: 'R$ 6.900,00', saida: 'R$ 5.500,00' },
  ];

  return (
    <Box sx={styles.parent}>
      <Grid container spacing={2} sx={styles.gridContainer}>
        {/* Div 1: Fundos de Investimento */}
        <Grid item sx={styles.div1}>
          <Paper elevation={3} sx={styles.paper}>
            <Typography variant="h6" gutterBottom>
              Fundos de Investimento
            </Typography>
            <Grid container spacing={2} sx={styles.fundosContainer}>
              {fundosInvestimento.map((fundo, index) => (
                <Grid item key={index} sx={styles.fundoItem}>
                  <Paper elevation={2} sx={styles.fundoPaper}>
                    <Typography variant="subtitle1">{fundo.nome}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      Rentabilidade: {fundo.rentabilidade}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        {/* Div 2: Entradas de Valor */}
        <Grid item sx={styles.div2}>
          <Paper elevation={3} sx={styles.paper}>
            <Typography variant="h6" gutterBottom>
              Entradas
            </Typography>
            <Box sx={styles.scrollableContent}>
              <List>
                {entradas.map((entrada, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={entrada.descricao}
                      secondary={`Valor: ${entrada.valor}`}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Paper>
        </Grid>

        {/* Div 3: Saídas/Contas Pendentes */}
        <Grid item sx={styles.div3}>
          <Paper elevation={3} sx={styles.paper}>
            <Typography variant="h6" gutterBottom>
              Saídas
            </Typography>
            <Box sx={styles.scrollableContent}>
              <List>
                {saidas.map((saida, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={saida.descricao}
                      secondary={`Status: ${saida.status}`}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Paper>
        </Grid>

        {/* Div 4: Balanço dos Últimos 3 Meses */}
        <Grid item sx={styles.div4}>
          <Paper elevation={3} sx={styles.paper}>
            <Typography variant="h6" gutterBottom>
              Balanço Mensal
            </Typography>
            <Box sx={styles.scrollableContent}>
              <List>
                {balancoMensal.map((balanco, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={balanco.mes}
                      secondary={`Entrada: ${balanco.entrada} | Saída: ${balanco.saida}`}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

const styles = {
  parent: {
    height: '100vh',
    padding: '16px',
  },
  gridContainer: {
    height: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)', 
    gridTemplateRows: 'repeat(6, 1fr)', 
    gap: '10px', 
  },
  paper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: '10px', 
    border: '1px solid #ccc', 
    padding: '16px', 
  },
  div1: {
    gridArea: '1 / 2 / 2 / 6', 
    width: '100%', 
    height: '150px', 
    marginBottom: '25px', 
  },
  div2: {
    gridArea: '2 / 1 / 6 / 3', 
    width: '100%', 
    height: '300px', 
  },
  div3: {
    gridArea: '2 / 3 / 6 / 5', 
    width: '100%', 
    height: '300px',
  },
  div4: {
    gridArea: '2 / 5 / 6 / 7',
    width: '100%', 
    height: '300px', 
  },
  fundosContainer: {
    display: 'flex',
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    width: '100%',
    overflowX: 'auto', 
  },
  fundoItem: {
    flex: '0 0 auto', 
    margin: '0 8px', 
  },
  fundoPaper: {
    padding: '16px',
    borderRadius: '8px',
    textAlign: 'center',
    minWidth: '120px', 
  },
  scrollableContent: {
    overflowY: 'auto', 
    maxHeight: '200px', 
    width: '100%',
  },
};