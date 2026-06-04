# Checklist de Segurança para QA

## Dados e Privacidade

- Usar somente massa fictícia.
- Evitar CPF, telefone, e-mail e endereço reais.
- Remover dados pessoais de prints, vídeos e relatórios públicos.
- Não salvar tokens, cookies ou credenciais no repositório.
- Não publicar `.env`.

## Ambiente

- Confirmar que a execução ocorre em staging.
- Não disparar contato real com profissionais sem autorização.
- Não criar carga agressiva contra produção.
- Validar se há rate limit antes de repetir testes de desempenho.

## Autenticação e Recuperação de Senha

- Mensagens de recuperação não devem revelar se o e-mail existe.
- Links de redefinição devem expirar.
- Senhas fracas devem ser rejeitadas.
- Sessões devem ser invalidadas após logout.

## Automação

- Armazenar segredos em GitHub Actions Secrets ou Variables.
- Não commitar vídeos com informações sensíveis.
- Preferir seletores estáveis como `data-testid` ou `data-cy`.
- Limpar massa criada quando o ambiente permitir.

## Evidências

- Evidências devem mostrar o problema sem expor dados sensíveis.
- Bugs críticos devem ter vídeo curto ou sequência de prints.
- Relatórios públicos devem ser revisados antes do envio.
