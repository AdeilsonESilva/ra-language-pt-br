import { TranslationMessages } from 'ra-core';

const brazilianPortugueseMessages: TranslationMessages = {
  ra: {
    action: {
      add_filter: 'Adicionar filtro',
      add: 'Adicionar',
      back: 'Retornar',
      bulk_actions: '%{smart_count} selecionado |||| %{smart_count} selecionados',
      cancel: 'Cancelar',
      clear_array_input: 'Limpara a lista',
      clear_input_value: 'Limpar valor',
      clone: 'Duplicar',
      confirm: 'Confirmar',
      create: 'Criar',
      create_item: 'Criar %{item}',
      delete: 'Remover',
      edit: 'Alterar',
      export: 'Exportar',
      list: 'Listar',
      refresh: 'Atualizar',
      remove_filter: 'Remover filtro',
      remove_all_filters: 'Remover todos os filtros',
      remove: 'Remover',
      save: 'Salvar',
      search: 'Buscar',
      select_all: 'Selecionar todos',
      select_row: 'Selecionar linha',
      show: 'Mostrar',
      sort: 'Ordenar',
      undo: 'Desfazer',
      unselect: 'Desmarcar',
      expand: 'Expandir',
      close: 'Fechar',
      open_menu: 'Abrir menu',
      close_menu: 'Fechar menu',
      update: 'Atualizar',
      move_up: 'Mover para cima',
      move_down: 'Mover para baixo',
      open: 'Abrir',
      toggle_theme: 'Alterar tema',
      select_columns: 'Selecionar Colunas',
      update_application: 'Recarregar Aplicação'
    },
    boolean: {
      true: 'Sim',
      false: 'Não',
      null: ' ',
    },
    page: {
      create: 'Criar %{name}',
      dashboard: 'Dashboard',
      edit: '%{name} #%{recordRepresentation}',
      error: 'Ocorreu um problema',
      list: '%{name}',
      loading: 'Carregando',
      not_found: 'Não encontrado',
      show: '%{name} #%{recordRepresentation}',
      empty: 'Sem %{name} ainda.',
      invite: 'Você quer adicionar um?',
    },
    input: {
      file: {
        upload_several:
          'Solte arquivos para upload, ou clique para selecionar um.',
        upload_single: 'Solte um arquivo para upload, ou clique para selecioná-lo.',
      },
      image: {
        upload_several:
          'Solte imagens para upload, ou clique para selecionar uma.',
        upload_single:
          'Solte uma imagem para upload, ou clique para selecioná-la.',
      },
      references: {
        all_missing: 'Não foi possível encontrar os dados de referência.',
        many_missing:
          'Pelo menos uma das referências associadas aparenta não estar mais disponível.',
        single_missing:
          'A referência associada aparenta não estar mais disponível.',
      },
      password: {
        toggle_visible: 'Ocultar senha',
        toggle_hidden: 'Mostrar senha',
      },
    },
    message: {
      about: 'Sobre',
      are_you_sure: 'Tem certeza?',
      auth_error: 'Ocorreu um erro ao validar o token de autenticação.',
      bulk_delete_content:
        'Você tem certeza que quer remover isso %{name}? |||| Você tem certeza que quer remover estes %{smart_count} items?',
      bulk_delete_title:
        'Remover %{name} |||| Remover %{smart_count} %{name}',
      bulk_update_content:
        'Tem certeza que deseja atualizar este %{name}? |||| Tem certeza que deseja atualizar estes %{smart_count} itens?',
      bulk_update_title:
        'Atualizar %{name} |||| Atualizar %{smart_count} %{name}',
      clear_array_input: 'Tem certeza de que deseja limpar toda a lista?',
      delete_content: 'Você tem certeza que quer remover este item?',
      delete_title: 'Remover %{name} #%{id}',
      details: 'Detalhes',
      error:
        'Ocorreu um erro no navegador e seu requisição não foi completada.',
      invalid_form: 'O formulário não é válido. Por favor, verifique os erros',
      loading: 'A página está carregando, aguarde um momento',
      no: 'Não',
      not_found:
        'Você digitou uma URL errada, ou seguiu um link errado.',
      yes: 'Sim',
      unsaved_changes:
        'Algumas de suas alteracões não foram salvas. Você tem certeza que quer ignorá-las?',
    },
    navigation: {
      no_results: 'Nenhum resultado encontrado',
      no_more_results:
        'A página número %{page} fora dos limites. Tente a página anterior.',
      page_out_of_boundaries: 'A página %{page} está fora dos limites',
      page_out_from_end: 'Fim da paginação',
      page_out_from_begin: 'A página não pode ser menor que 1',
      page_range_info: '%{offsetBegin}-%{offsetEnd} de %{total}',
      partial_page_range_info:
        '%{offsetBegin}-%{offsetEnd} de mais de %{offsetEnd}',
      current_page: 'Página %{page}',
      page: 'Ir para página %{page}',
      first: 'Ir para primeira página',
      last: 'Ir para ultima página',
      next: 'Próxima',
      previous: 'Anterior',
      page_rows_per_page: 'Linhas por página:',
      skip_nav: 'Ir para o conteúdo',
    },
    sort: {
      sort_by: 'Ordernar por %{field} %{order}',
      ASC: 'ascendente',
      DESC: 'descendente',
    },
    auth: {
      auth_check_error: 'Faça o login para continuar',
      user_menu: 'Perfil',
      username: 'Usuário',
      password: 'Senha',
      sign_in: 'Entrar',
      sign_in_error: 'Erro na autenticação, por favor tente novamente',
      logout: 'Sair',
    },
    notification: {
      updated: 'Elemento atualizado |||| %{smart_count} elementos atualizados',
      created: 'Elemento criado',
      deleted: 'Elemento removido |||| %{smart_count} elementos removidos',
      bad_item: 'Elemento incorreto',
      item_doesnt_exist: 'O elemento não existe',
      http_error: 'Erro de comunicação com o servidor',
      data_provider_error:
        'Erro com o dataProvider. Verifique o console para mais detalhes.',
      i18n_error:
        'Não foi possível carregar as traduções para a linguagem especificada',
      canceled: 'Ação cancelada',
      logged_out: 'Sua sessão foi finalizada, por favor reconecte.',
      not_authorized: "Você não está autorizado a acessar este recurso.",
      application_update_available: 'Uma nova versão está disponível.',
    },
    validation: {
      required: 'Obrigatório',
      minLength: 'Deve ter pelo menos %{min} caracteres',
      maxLength: 'Deve ter no máximo %{max} caracteres',
      minValue: 'Deve ser no mínimo %{min}',
      maxValue: 'Deve ser no máximo %{max}',
      number: 'Deve ser um número',
      email: 'Deve ser um e-mail válido',
      oneOf: 'Deve ser um destes: %{options}',
      regex: 'Deve respeitar um formato específico (regexp): %{pattern}',
    },
    saved_queries: {
      label: 'Consultas salvas',
      query_name: 'Nome da consulta',
      new_label: 'Salvar consulta atual...',
      new_dialog_title: 'Salvar consulta atual como...',
      remove_label: 'Remover consulta salva',
      remove_label_with_name: 'Removee consulta "%{name}"',
      remove_dialog_title: 'Remover consulta salva?',
      remove_message:
        'Tem certeza de que deseja remover esse item da sua lista de consultas salvas?',
      help: 'Filtre a lista e salve esta consulta para mais tarde',
    },
    configurable: {
      customize: 'Customizar',
      configureMode: 'Configurar esta página',
      inspector: {
        title: 'Inspetor',
        content: 'Passe o mouse sobre os elementos da interface do usuário do aplicativo para configurá-los',
        reset: 'Redefinir configurações',
        hideAll: 'Esconder tudo',
        showAll: 'Mostrar tudo',
      },
      Datagrid: {
        title: 'Grade de dados',
        unlabeled: 'Coluna sem rótulo #%{column}',
      },
      SimpleForm: {
        title: 'Formulário',
        unlabeled: 'Campo sem rótulo #%{input}',
      },
      SimpleList: {
        title: 'Lista',
        primaryText: 'Texto primário',
        secondaryText: 'Texto secundário',
        tertiaryText: 'Texto terciário',
      },
    },
  },
};

export default brazilianPortugueseMessages;
