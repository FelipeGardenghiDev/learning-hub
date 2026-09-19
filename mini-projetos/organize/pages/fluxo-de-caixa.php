<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>OrgaNize ERP</title>
        <link rel="stylesheet" href="../css/reset.css" type="text/css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" 
        integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.12.1/font/bootstrap-icons.min.css">
        <link rel="stylesheet" href="../css/styles.css" type="text/css">
    </head>

    <body>
        <header>
            <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                  <a class="navbar-brand" href="">OrgaNize</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                      <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="../index.php">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="./FAQ.php">FAQ</a>
                      </li>
                      <li class="nav-item">
                          <div class="dropdown">
                                <a class="nav-link dropdown dropdown-toggle active" role="button" data-bs-toggle="dropdown" aria-expanded="false">Ferramentas</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="./cadastro-produtos.php">Cadastro de Produtos</a></li>
                                    <li><a class="dropdown-item" href="./clientes-fornecedores.php">Clientes e Fornecedores</a></li>
                                    <li><a class="dropdown-item active text-bg-dark" href="#">Fluxo de Caixa</a></li>
                                    <li><a class="dropdown-item" href="./relatorios.php">Relatórios</a></li>
                            </ul>
                            </div>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="./configuracoes.php">Configurações</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <a class="btn btn-outline-dark" href="#" role="button">Entrar</a>
                    <a class="btn btn-outline-dark" href="#" role="button">Registrar</a>
                  </div>
                </div>
              </nav>
        </header>

        <main>
          <!-- Saldo -->
           <section>
          <div class="container-fluid text-center mt-5 pt-5">
              <h2 class="text-uppercase fs-2 display-1">Fluxo de Caixa</h2>
          </div>
          <div class="container-fluid d-inline-flex justify-content-evenly align-items-center mt-3">
            <div class="card" style="width: 28vw; height: 9.5rem;">
              <div class="card-header text-success">
                A receber
              </div>
              <div class="card-body">
                <h5 class="card-title mt-1">R$ 0,00</h5>
                <a href="#" class="btn btn-success mt-2 position-relative start-50" style="width: 10rem;">Adicionar receita</a>
              </div>
            </div>
    
            <div class="card" style="width: 28vw; height: 9.5rem;">
              <div class="card-header text-danger">
                A pagar
              </div>
              <div class="card-body">
                <h5 class="card-title mt-1">R$ - 0,00</h5>
                <a href="#" class="btn btn-danger mt-2 position-relative start-50" style="width: 10rem;">Adicionar despesa</a>
              </div>
            </div>
    
            <div class="card" style="width: 28vw; height: 9.5rem;">
              <div class="card-header d-flex justify-content-between align-items-center">
                <span>Projeção de saldo em </span><span>dia/mês/ano</span>
              </div>
              <div class="card-body">
                <h5 class="card-title mt-1">R$ 0,00</h5>
                <hr>
                <p class="card-text d-flex justify-content-between align-items-center"><span>Saldo atual: </span><span>R$ 0,00</span></p>
              </div>
            </div>
          </div>
        </section>

        <!-- Lançamentos -->
        <section>
          <div class="container-fluid text-center mt-5 pt-2">
            <h2 class="fs-2 display-2">Lançamentos</h2>
        </div>
          <div class="container-fluid d-inline-flex justify-content-evenly align-items-center mt-4">
            <div class="card" style="width: 40vw;">
              <div class="card-header text-success d-flex justify-content-between align-items-center">
                <span>Receitas</span><span>mês/ano</span>
              </div>
              <div class="card-body">
                <table class="table table-striped">
                  <!-- marcar a linha com a classe table-success caso a data já tenha passado -->
                  <thead>
                    <tr>
                      <th style="width:5%;"></th>
                      <th style="width:5%;text-align:center;">Data</th>
                      <th style="width:38%;text-align:center;">Descrição</th>
                      <th style="width:20%;text-align:center;">Origem</th>
                      <th style="width:15%;text-align:center;">Valor</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td align="center"><span class="d-flex justify-content-center align-items-center" style="gap:0.5rem;"><i class="bi bi-trash-fill"></i><i class="bi bi-pencil-fill"></i></span></td>
                      <td align="center">15/05</td>
                      <td align="center">Teste descrição</td>
                      <td align="center">Mercado Livre</td>
                      <td align="center">R$ 50,00</td>
                    </tr>
                    <tr>
                      <td align="center"><span class="d-flex justify-content-center align-items-center" style="gap:0.5rem;"><i class="bi bi-trash-fill"></i><i class="bi bi-pencil-fill"></i></span></td>
                      <td align="center">18/05</td>
                      <td align="center">Teste descrição 2</td>
                      <td align="center">Shopee</td>
                      <td align="center">R$ 50,00</td>
                    </tr>
                    <tr>
                      <td align="center"><span class="d-flex justify-content-center align-items-center" style="gap:0.5rem;"><i class="bi bi-trash-fill"></i><i class="bi bi-pencil-fill"></i></span></td>
                      <td align="center">22/05</td>
                      <td align="center">Teste descrição maior</td>
                      <td align="center">Empréstimo</td>
                      <td align="center">R$ 50,00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
    
            <div class="card" style="width: 40vw;">
              <div class="card-header text-danger d-flex justify-content-between align-items-center">
                <span>Despesas</span><span>mês/ano</span>
              </div>
              <div class="card-body">
                <table class="table table-striped">
                  <!-- marcar a linha com a classe table-danger caso a data já tenha passado -->
                  <thead>
                    <tr>
                      <th style="width:5%;"></th>
                      <th style="width:5%;text-align:center;">Data</th>
                      <th style="width:35%;text-align:center;">Descrição</th>
                      <th style="width:26%;text-align:center;">Destino</th>
                      <th style="width:16%;text-align:center;">Valor</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td align="center"><span class="d-flex justify-content-center align-items-center" style="gap:0.5rem;"><i class="bi bi-trash-fill"></i><i class="bi bi-pencil-fill"></i></span></td>
                      <td align="center">15/05</td>
                      <td align="center">Teste descrição</td>
                      <td align="center">Saemas</td>
                      <td align="center">R$ - 50,00</td>
                    </tr>
                    <tr>
                      <td align="center"><span class="d-flex justify-content-center align-items-center" style="gap:0.5rem;"><i class="bi bi-trash-fill"></i><i class="bi bi-pencil-fill"></i></span></td>
                      <td align="center">18/05</td>
                      <td align="center">Teste descrição 2</td>
                      <td align="center">CPFL</td>
                      <td align="center">R$ - 50,00</td>
                    </tr>
                    <tr>
                      <td align="center"><span class="d-flex justify-content-center align-items-center" style="gap:0.5rem;"><i class="bi bi-trash-fill"></i><i class="bi bi-pencil-fill"></i></span></td>
                      <td align="center">22/05</td>
                      <td align="center">Teste descrição maior</td>
                      <td align="center">Metalúrgica Trevo</td>
                      <td align="center">R$ - 50,00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        </main>

        <footer class="text-center mt-3">
    <section class="container p-4 pb-0 mb-2">
        <div class="text-center mt-4">
            <h5 class="text-uppercase fs-6">Contato com o desenvolvedor:</h5>
        </div>        
        <a class="btn" href="mailto:felipegg.dev@gmail.com" target="_blank" rel="noopener noreferrer"><i
          class="bi bi-envelope"></i></a>
      <a class="btn" href="https://wa.me/5516993733667/?text=Olá! Estou entrando em contato referente ao OrgaNize." target="_blank" rel="noopener noreferrer"><i
          class="bi bi-whatsapp"></i></a>
      <a class="btn" href="https://www.instagram.com/felipegardenghi.dev/" target="_blank" rel="noopener noreferrer"><i
          class="bi bi-instagram"></i></a>
      <a class="btn" href="https://www.linkedin.com/in/felipegardenghi/" target="_blank" rel="noopener noreferrer"><i
          class="bi bi-linkedin"></i></a>
      <a class="btn" href="https://github.com/felipegardenghidev" target="_blank" rel="noopener noreferrer"><i
          class="bi bi-github"></i></a>
    </section>
    <section class="container mb-1">
    <div class="pb-1">
      <p class="fs-6">2025 <i class="bi bi-c-circle"></i> Desenvolvido por Felipe Gardenghi | Versão 0.1.1</p>
    </div>
    </section>
        </footer>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" 
        integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
    </body>
</html>