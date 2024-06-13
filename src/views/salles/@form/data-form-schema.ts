import { z } from 'zod'

export const dataFormSchema = z.object({
  input: z.object({
    pedidoVenda: z.object({
      acrescimo: z.number().optional(),

      contatos: z.array(
        z.object({
          create: z.object({
            padrao: z.boolean().optional(),
            tipo: z.enum(['Email', 'Telefone', 'Celular']),
            valor: z.string(),
          }),
        }),
      ),

      desconto: z.number().optional(),

      endereco: z.object({
        create: z.object({
          bairro: z.string().optional(),
          cep: z.string(),
          cidade: z.string().optional(),
          complemento: z.string().optional(),
          estado: z.string().optional(),
          lat: z.number().optional(),
          lng: z.number().optional(),
          numero: z.string(),
          rua: z.string().optional(),
          tipo: z
            .enum(['Casa', 'Trabalho', 'Agendamento', 'Outros'])
            .optional(),
        }),
      }),

      equipamentoPedido: z.object({
        equipamentoTipo: z.object({
          connect: z.object({
            id: z.string(),
          }),
          observacao: z.string().optional(),
          quantidade: z.number(),
        }),
      }),

      formaPagamento: z.object({
        connect: z.object({
          id: z.string(),
        }),
      }),

      lead: z.object({
        upsert: z.object({
          data_nascimento: z.string().optional(),
          documento: z.string().optional(),
          documento_tipo: z.enum(['CPF', 'CNPJ']).optional(),
          id: z.string().optional(),
          is_cliente: z.boolean().optional(),
          nome: z.string(),
          observacao: z.string().optional(),
          publicidade: z.string().optional(),
        }),
      }),

      modeloContrato: z.object({
        connect: z.object({
          id: z.string(),
        }),
      }),

      parcelas: z.number().optional(),

      valor: z.object({
        connect: z.object({
          id: z.string(),
        }),
      }),
    }),
  }),
})

export type DataFromSallesForm = z.infer<typeof dataFormSchema>
