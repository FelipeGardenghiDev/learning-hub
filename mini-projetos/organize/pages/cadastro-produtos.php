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
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" 
                    aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span>
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
                                    <li><a class="dropdown-item active text-bg-dark" href="#">Cadastro de Produtos</a></li>
                                    <li><a class="dropdown-item" href="./clientes-fornecedores.php">Clientes e Fornecedores</a></li>
                                    <li><a class="dropdown-item" href="./fluxo-de-caixa.php">Fluxo de Caixa</a></li>
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
          <!-- Cadastro de Produtos -->
          <section>
            <div class="container-fluid text-center mt-5 pt-5">
                <h2 class="text-uppercase fs-2 display-1">Cadastro de Produtos</h2>
            </div>
            <div class="d-flex justify-content-between align-items-center mb-2 mt-3 m-5">
              <div></div>
              <div></div>
              <div></div>
              <div class="d-inline-flex input-group mb-3" style="height:2rem;width:17.5rem;">
                <span class="input-group-text">Filtrar por</span>
                <select class="form-select">
                  <option selected>Selecione</option>
                  <option value="1">Canivetes</option>
                  <option value="2">Bainhas</option>
                  <option value="3">Facas</option>
                  <option value="4">Rodas de Pano</option>
                  <option value="5">Pastas de Polir</option>
                  <option value="6">Afiadores</option>
                  <option value="7">Todos os produtos</option>
                </select>
              </div>
              <div></div>
              <div>
                <button type="button" class="btn btn-success d-flex align-items-center" style="height:2.4rem;"><i class="bi bi-plus"></i>Adicionar produto</button>
              </div>
            </div>
            <table class="table table-striped">
              <thead>
                <tr></tr>
                  <th style="width:5%;"></th>
                  <th style="width:6%;text-align:center;">SKU</th>
                  <th style="width:6%;text-align:center;">Marca</th>
                  <th style="width:46%;text-align:center;">Produto</th>
                  <th style="width:8%;text-align:center;">Estoque</th>
                  <th style="width:10%;text-align:center;">Preço de compra</th>
                  <th style="width:12%;text-align:center;">Categoria</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td align="center"><span class="d-flex justify-content-center align-items-center" style="gap:0.6rem;"><i class="bi bi-trash-fill"></i>
                    <i class="bi bi-pencil-fill"></i></span></td>
                  <td align="center">CR56</td>
                  <td align="center">Trevo</td>
                  <td align="center">Canivete Cabo de Madeira Aço Inox Com Ponta 18cm</td>
                  <td align="center">5</td>
                  <td align="center">R$ 22,00</td>
                  <td align="center">Canivetes</td>
                </tr>
                <tr>
                  <td align="center"><span class="d-flex justify-content-center align-items-center" style="gap:0.6rem;"><i class="bi bi-trash-fill"></i>
                    <i class="bi bi-pencil-fill"></i></span></td>
                  <td align="center">CR78</td>
                  <td align="center">Horse</td>
                  <td align="center">Bainha GG</td>
                  <td align="center">12</td>
                  <td align="center">R$ 16,50</td>
                  <td align="center">Bainhas</td>
                </tr>
                <tr>
                  <td align="center"><span class="d-flex justify-content-center align-items-center" style="gap:0.6rem;"><i class="bi bi-trash-fill"></i>
                    <i class="bi bi-pencil-fill"></i></span></td>
                  <td align="center">CR122</td>
                  <td align="center">Matelê</td>
                  <td align="center">Strop de Couro Grande Dupla Face</td>
                  <td align="center">25</td>
                  <td align="center">R$ 25,50</td>
                  <td align="center">Afiadores</td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>

        <footer class="text-center mt-3">
    <section class="container p-4 pb-0 mb-2">
        <div class="text-center mt-4">
            <h5 class="text-uppercase fs-6">Contato com o desenvolvedor:</h5>
        </div>        
        <a class="btn" href="mailto:felipegg.dev@gmail.com" target="_blank" rel="noopener noreferrer"><i
          class="bi bi-envelope"></i></a>
      <a class="btn" href="https://wa.me/5516993733667/?text=Olá! Estou entrando em contato referente ao OrgaNize." target="_blank" 
        rel="noopener noreferrer"><i
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