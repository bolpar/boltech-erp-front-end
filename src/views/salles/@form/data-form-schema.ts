import { z } from 'zod'

export const dataFormSchema = z.object({
  input: z.object({
    pedidoVenda: z.object({
      acrescimo: z.string().optional().transform(Number),

      contatos: z.object({
        create: z.array(
          z.object({
            padrao: z.boolean().optional(),
            tipo: z.enum(['Email', 'Telefone', 'Celular']),
            valor: z
             .string()
             .min(1, { message: 'Por favor, digite um valor.' }),
          }),
        ),
      }),

      desconto: z.string().optional().transform(Number),

      endereco: z.object({
        create: z.object({
          bairro: z.string().optional(),
          cep: z
            .string()
            .min(1, { message: 'Por favor, digite um CEP valido.' }),
          cidade: z.string().optional(),
          complemento: z.string().optional().refine((complemento) => complemento !== ''),
          estado: z.string().optional(),
          lat: z.number().optional(),
          lng: z.number().optional(),
          numero: z
            .string()
            .min(1, { message: 'Por favor, digite o número do endereço.' }),
          rua: z.string().optional(),
          tipo: z
            .enum(['Casa', 'Trabalho', 'Agendamento', 'Outros'])
            .optional(),
        }).optional(),
      }),

      equipamentoPedido: z.object({
        equipamentoTipo: z.object({
          connect: z.object({
            id: z.string().min(1, {
              message: 'Por favor, insira o tipo de plano correto.',
            }),
          }),
        }),
        observacao: z.string().optional(),
        quantidade: z.string().min(1, {
          message: 'Por favor, digite a quantidade',
        }).transform(Number),
      }),

      formaPagamento: z.object({
        connect: z.object({
          id: z
            .string()
            .min(1, { message: 'Por favor, insira a forma de pagamento.' }),
        }),
      }),

      lead: z.object({
        upsert: z.object({
          data_nascimento: z.string().optional(),
          documento: z.string().optional(),
          documento_tipo: z.enum(['CPF', 'CNPJ']).optional(),
          id: z.string().optional(),
          is_cliente: z.boolean().optional(),
          nome: z.string().min(1, { message: 'Por favor, insira o nome.' }),
          observacao: z.string().optional(),
          publicidade: z.string().optional(),
        }),
      }),

      modeloContrato: z.object({
        connect: z.object({
          id: z
            .string()
            .min(1, { message: 'Por favor, selecione o modelo de contrato.' }),
        }),
      }),

      parcelas: z.number().optional(),

      valor: z.object({
        connect: z.object({
          id: z.string().min(1, { message: 'Por favor, digite um valor.' }),
        }),
      }),
    }),
  }),
})

export type DataFromSallesForm = z.infer<typeof dataFormSchema>
