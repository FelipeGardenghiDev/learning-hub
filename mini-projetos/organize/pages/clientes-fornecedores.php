<?php
// Código de conexão do php com o banco de dados sqlite via PDO
$pdo = new PDO('sqlite:../banco.db');
$entidades = $pdo->query('SELECT * FROM ENTIDADES');

?>

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
                                    <li><a class="dropdown-item" href="./cadastro-produtos.php">Cadastro de Produtos</a></li>
                                    <li><a class="dropdown-item active text-bg-dark" href="#">Clientes e Fornecedores</a></li>
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
          <!-- Clientes e Fornecedores -->
          <section>
            <div class="container-fluid text-center mt-5 pt-5">
                <h2 class="text-uppercase fs-2 display-1">Clientes e Fornecedores</h2>
            </div>
            <div class="d-flex justify-content-between align-items-center mb-4 mt-3 m-5">
              <div class="d-inline-flex input-group mb-3" style="height:6.5vh;width:19vw;">
                <span class="input-group-text">Filtrar por</span>
                <select class="form-select">
                  <option selected>Selecione</option>
                  <option value="1">Clientes</option>
                  <option value="2">Fornecedores</option>
                  <option value="3">Logística</option>
                  <option value="4">Todos</option>
                </select>
              </div>
              <!-- Ver se esse é o melhor jeito do button para levar ao form, passando parametros e etc. Considerar usar JS -->
              <button type="button" onClick="window.location = 'forms/form-cadastro-entidades.php'" class="btn btn-success d-flex align-items-center justify-content-center" style="height:6.5vh;width:12vw;">
                <div style="font-size:1.2vw;"><i class="bi bi-plus-circle"></i> Novo Cadastro</div>
              </button>
            </div>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th style="width:6%;"></th>
                  <th style="width:15%;text-align:center;">Data de Cadastro</th>
                  <th style="width:15%;text-align:center;">Data de Atualização</th>
                  <th style="width:25%;text-align:center;">Nome</th>
                  <th style="width:19%;text-align:center;">Contato</th>
                  <th style="width:10%;text-align:center;">Tipo</th>
                  <th style="width:10%;text-align:center;">Categoria</th>
                </tr>
              </thead>
              <tbody>
              <?php 
                foreach ($entidades as $entidade) {
              ?>
                <tr>
                  <td align="center"><span class="d-flex justify-content-center align-items-center" style="gap:1rem;"><i class="bi bi-trash-fill"></i>
                    <i class="bi bi-pencil-fill"></i></span></td>
                    <td align="center"><?=$entidade['DATA_CADASTRO']?></td>
                    <td align="center"><?=$entidade['DATA_ATUALIZACAO']?></td>
                    <td align="center"><?=$entidade['NOME']?></td>
                    <td align="center"><?=$entidade['EMAIL']?></td>
                  <td align="center"><?=$entidade['TIPO_ENTIDADE']?></td>
                  <td align="center"><?=$entidade['CATEGORIA_ENTIDADE']?></td>
                </tr>
                <!-- Criar um "DROPDOWN" (com aquelas setinhas do lado de expandir, estilo o dropdown do navbar mesmo) quando clica em algum dessas entidades, para 
                  abrir uma lista (estilo tabela mesmo) mostrando os contatos dentro de cada uma dessas entidades!! -->
              <?php
                }
              ?>
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