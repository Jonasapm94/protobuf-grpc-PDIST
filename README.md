# Protobuf e GRPC tutorial
## Trabalho para disciplina de Programação Distribuída - Prof. Gustavo Wagner

### Instalação protoc

Se estiver no linux (ubuntu/debian) instale usando os comandos:
   
    $ apt install -y protobuf-compiler
    $ protoc --version (verifique a instalação)

Nos demais sistemas operacionais, buscar a documentação no site ou baixar o arquivo binário
https://grpc.io/docs/protoc-installation/
https://protobuf.dev/downloads/


### Uso do compilador protoc
    
sintaxe para compilação
    
    protoc -I=$DIR_FONTE --java_out=$DIR_DEST $DIR_FONTE/<nome do arquivo proto>.proto