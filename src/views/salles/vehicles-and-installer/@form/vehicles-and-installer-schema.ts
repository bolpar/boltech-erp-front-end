import { z } from 'zod'

export const vehiclesAndInstallerFormSchema = z.object({
  input: z.object({
    pedidoVenda: z.object({
      connect: z.object({
        id: z.string(),
      }),
    }),

    veiculo: z.object({
      upsert: z.object({
        id: z.string().optional(),
        placa: z.string().max(7).optional(),
        marca: z.string().max(50),
        modelo: z.string().max(50),
        ano: z.string().max(4),
        cor: z.string().max(15),
        observacao: z.string(),
        tipoVeiculo: z.object({
          connect: z.object({
            id: z.string(),
          }),
        }),
      }),

      veiculoAgendamento: z.object({
        create: z.object({
          instalacao: z.date(),
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
            id: z.string(),
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
