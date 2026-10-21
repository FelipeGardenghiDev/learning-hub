# 🏛️ Modelo Mental: Arquitetura Hexagonal (Ports & Adapters) & DDD

> **Guia de Referência Rápida para Backend Crítico (Java 21 / .NET 8 / TypeScript)**

---

## 1. Princípio Fundamental: A Regra de Dependência

> **O Domínio NUNCA conhece a infraestrutura externa, o framework ou o banco de dados.**  
> Todas as dependências apontam **para dentro**, em direção às regras de negócio puras.

```mermaid
flowchart TD
    subgraph Driving ["Atores Primários (Driving / Inbound)"]
        HTTP["Controladores REST / GraphQL"]
        CRON["Schedulers & Cron Jobs"]
        CLI["Linha de Comando / Consumer Kafka"]
    end

    subgraph Hexagon ["Núcleo da Aplicação (O Hexágono Puro)"]
        IN_PORT["Inbound Ports (Use Cases Interfaces)"]
        USE_CASES["Application Services / Interactors"]
        DOMAIN["Domain Model: Entities, Value Objects & Domain Events"]
        OUT_PORT["Outbound Ports (Repository / Gateway Interfaces)"]
    end

    subgraph Driven ["Atores Secundários (Driven / Outbound)"]
        DB["PostgreSQL / EF Core / JPA"]
        CACHE["Redis (Lua Scripts / Lock Atômico)"]
        EXTERNAL_API["Bureaus de Crédito / Gateways de Pagamento"]
    end

    HTTP --> IN_PORT
    CRON --> IN_PORT
    CLI --> IN_PORT
    IN_PORT --> USE_CASES
    USE_CASES --> DOMAIN
    USE_CASES --> OUT_PORT
    OUT_PORT --> DB
    OUT_PORT --> CACHE
    OUT_PORT --> EXTERNAL_API
```

---

## 2. Diferença Entre Camadas

| Camada | O que contém | O que pode importar | O que NUNCA deve conter |
| :--- | :--- | :--- | :--- |
| **Domain** | Entidades, Value Objects, Domain Exceptions, Eventos | **NADA** externo (apenas tipos puros da linguagem) | Anotações JPA/EF, `HttpServletRequest`, imports de SQL |
| **Application** | Casos de Uso (Use Cases), DTOs de entrada/saída, Portas (Interfaces) | Domain | Drivers de banco, frameworks HTTP (Spring/ASP.NET) |
| **Infrastructure** | Implementação de Repositórios, Adaptadores HTTP, Controllers, Redis Lua | Application, Domain, Frameworks externos | Regras de negócio arbitrárias sem passar pelo domínio |

---

## 3. Na Prática: Implementação nos Projetos

* **[fraud-detection-api](https://github.com/FelipeGardenghiDev/fraud-detection-api)**: Java 21, Spring Boot 3, Hexagonal puro, Redis Lua atômico, Virtual Threads.
* **[order-processing-api](https://github.com/FelipeGardenghiDev/order-processing-api)**: C# 12, .NET 8, Clean Architecture, CQRS (EF Core + Dapper), Channels.
