#!/bin/bash

# Parâmetros do script
ORIGEM="midday"
NOVO="exzossphere"
NAMESPACE_OLD="@midday"
NAMESPACE_NEW="@exzos"
DOMINIO_OLD="midday.ai"
DOMINIO_NEW="exzossphere.ai"

# Substituição em arquivos de código e markdown
grep -rl --exclude-dir=.git "$ORIGEM" . | xargs sed -i "s/$ORIGEM/$NOVO/g"
grep -rl --exclude-dir=.git "Midday" . | xargs sed -i "s/Midday/ExzosSphere/g"
grep -rl --exclude-dir=.git "$NAMESPACE_OLD" . | xargs sed -i "s/$NAMESPACE_OLD/$NAMESPACE_NEW/g"
grep -rl --exclude-dir=.git "$DOMINIO_OLD" . | xargs sed -i "s/$DOMINIO_OLD/$DOMINIO_NEW/g"
# Adicione comandos para outros termos, domínios e namespaces conforme necessário

# Atualização de arquivos README
find . -name "README.md" | xargs sed -i "s/$ORIGEM/$NOVO/g"

# Logging das alterações
echo "Rebranding realizado em $(date)" >> migration.log