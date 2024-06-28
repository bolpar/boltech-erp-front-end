import { z } from 'zod'

export const dataFormSchema = z.object({
  input: z.object({
    pedidoVenda: z.object({
      acrescimo: z
        .string()
        .optional()
        .transform(Number)
        .transform((value) => (value === 0 ? undefined : value)),

      contatos: z.object(
        {
          create: z.array(
            z.object({
              padrao: z.boolean().optional(),
              tipo: z.enum(['Email', 'Telefone', 'Celular']),
              valor: z
                .string({
                  required_error: 'Por favor, digite um valor.',
                  invalid_type_error: 'Tipo errado.',
                })
                .min(1, { message: 'Por favor, digite um valor.' }),
            }),
          ),
        },
        { message: 'Por favor, digita um valor. ' },
      ),

      desconto: z
        .string()
        .optional()
        .transform(Number)
        .transform((value) => (value === 0 ? undefined : value)),

      endereco: z.object({
        create: z
          .object({
            bairro: z
              .string()
              .optional()
              .transform((value) => (value === '' ? undefined : value)),
            cep: z
              .string()
              .min(1, { message: 'Por favor, digite um CEP valido.' })
              .transform((value) => (value === '' ? undefined : value)),
            cidade: z
              .string()
              .optional()
              .transform((value) => (value === '' ? undefined : value)),
            complemento: z
              .string()
              .optional()
              .transform((value) => (value === '' ? undefined : value)),
            estado: z
              .string()
              .optional()
              .transform((value) => (value === '' ? undefined : value)),
            lat: z.number().optional(),
            lng: z.number().optional(),
            numero: z
              .string()
              .min(1, { message: 'Por favor, digite o número do endereço.' }),
            rua: z
              .string()
              .optional()
              .transform((value) => (value === '' ? undefined : value)),
            tipo: z
              .enum(['Casa', 'Trabalho', 'Agendamento', 'Outros'])
              .optional()
              .transform((value) => (value === undefined ? undefined : value)),
          })
          .optional(),
      }),

      equipamentoPedido: z.object({
        equipamentoTipo: z.object({
          connect: z.object({
            id: z
              .string({
                required_error: 'Por favor, selecione o tipo do aparelho',
              })
              .min(1, {
                message: 'Por favor, insira o tipo de plano correto.',
              }),
          }),
        }),
        observacao: z
          .string()
          .optional()
          .transform((value) => (value === '' ? undefined : value)),
        quantidade: z
          .string()
          .min(1, {
            message: 'Por favor, digite a quantidade',
          })
          .transform(Number),
      }),

      formaPagamento: z.object({
        connect: z.object({
          id: z
            .string({
              invalid_type_error: 'Parece que o tipo inserido não é valido.',
              required_error: 'Por favor, insira a forma de pagamento.',
            })
            .min(1, { message: 'Por favor, insira a forma de pagamento.' }),
        }),
      }),

      lead: z.object({
        upsert: z.object({
          data_nascimento: z
            .string()
            .optional()
            .transform((value) => (value === '' ? undefined : value)),
          documento: z
            .string()
            .min(11)
            .max(14)
            .optional()
            .transform((value) => (value === '' ? undefined : value)),
          documento_tipo: z
            .enum(['CPF', 'CNPJ'])
            .optional()
            .transform((value) => (value === undefined ? 'CPF' : value)),
          id: z
            .string()
            .optional()
            .transform((value) => (value === '' ? undefined : value)),
          is_cliente: z
            .boolean()
            .optional()
            .transform((value) => (value === undefined ? undefined : value)),
          nome: z.string().min(1, { message: 'Por favor, insira o nome.' }),
          observacao: z
            .string()
            .optional()
            .transform((value) => (value === '' ? undefined : value)),
          publicidade: z
            .string()
            .optional()
            .transform((value) => (value === '' ? undefined : value)),
        }),
      }),

      modeloContrato: z.object({
        connect: z.object({
          id: z
            .string({ required_error: 'Por favor, selecione o modelo de contrato.'})
            .min(1, { message: 'Por favor, selecione o modelo de contrato.' }),
        }),
      }),

      parcelas: z.string().optional().transform(Number),

      valor: z.object({
        connect: z.object({
          id: z.string({ required_error: 'Por favor, digite um valor.'}).min(1, { message: 'Por favor, digite um valor.' }),
        }),
      }),
    }),
  }),
})

export type DataFromSallesForm = z.infer<typeof dataFormSchema>
