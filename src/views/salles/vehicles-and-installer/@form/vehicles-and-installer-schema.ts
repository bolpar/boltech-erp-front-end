import { z } from 'zod'

export const vehiclesAndInstallerFormSchema = z.object({
  input: z.object({
    pedidoVenda: z.object({
      connect: z.object({
        id: z
          .string()
          .min(1, { message: 'Por favor, insira o Id do pedido de venda.' }),
      }),
    }),

    veiculo: z.object({
      upsert: z.object({
        id: z.string().optional(),
        placa: z.string().max(7).optional(),
        marca: z
          .string()
          .min(1, { message: 'Por favor, digite uma marca de veículo.' })
          .max(50, {
            message:
              'Por favor, insira um nome de marca de no máximo 50 caracteres.',
          }),
        modelo: z
          .string()
          .min(1, { message: 'Por favor, digite um modelo de veículo.' })
          .max(50, {
            message:
              'Por favor, insira um nome de modelo de no máximo 50 caracteres.',
          }),
        ano: z
          .string()
          .min(1, { message: 'Por favor, digite o ano do veículo.' })
          .max(4, {
            message: 'Por favor, insira um ano de no máximo 4 caracteres.',
          }),
        cor: z
          .string()
          .min(1, { message: 'Por favor, digite uma cor do veículo' })
          .max(15, {
            message: 'Por favor, insira uma cor de no máximo 15 caracteres.',
          }),
        observacao: z.string().optional(),
        tipoVeiculo: z
          .object({
            connect: z.object({
              id: z.string(),
            }),
          })
          .optional(),
      }),

      veiculoAgendamento: z.object({
        create: z.object({
          instalacao: z.date({
            invalid_type_error: 'Por favor, digite uma data válida.',
          }),
          observacao: z.string().optional(),
          valor: z.string().transform(Number),
          valor_deslocamento: z.string().transform(Number).optional(),
        }),

        endereco: z.object({
          create: z.object({
            rua: z.string().max(255).optional(),
            numero: z.string().max(20),
            bairro: z.string().optional(),
            cidade: z.string().max(30).optional(),
            estado: z.string().max(2).optional(),
            cep: z.string().max(8).optional(),
            complemento: z.string().max(255).optional(),
            tipo: z.enum(['Casa', 'Trabalho', 'Agendamento', 'Outros']),
            lat: z.number().optional(),
            lng: z.number().optional(),
          }),
        }),

        tecnico: z.object({
          connect: z.object({
            id: z
              .string({
                required_error: 'Por favor, digite o técnico correspondente.',
              })
              .min(1, {
                message: 'Por favor, digite o técnico correspondente.',
              }),
          }),
        }),

        tecnicoServico: z.object({
          connect: z.object({
            id: z.string(),
          }),
        }),
      }),
    }),
  }),
})

export type VehiclesAndInstallerFormData = z.infer<
  typeof vehiclesAndInstallerFormSchema
>
