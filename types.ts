export type RootStackParamList = {
  Register: undefined;
  Login: undefined;
  Home: undefined;
  Prevention: undefined;
  Diseases: undefined;
  Monitor: undefined;
  Purchase: undefined;
  AdminPanel: undefined;
};

export type DecodedToken = {
  sub: string;
  roles: string[] | string;
};

export type LeituraSensor = {
  id: number;
  temperatura?: number;
  umidade?: number;
};
export enum TIPO {
  TEMPERATURA = "TEMPERATURA",
  PRESSAO = "PRESSAO",
  UMIDADE = "UMIDADE",
}

export enum STATUS {
  ATIVO = "ATIVO",
  RESOLVIDO = "RESOLVIDO",
}

export type Alerta = {
  id: number;
  mensagem: string;
  tipo: TIPO;
  nivelRisco: number;
  status: STATUS;
  leituraSensor: LeituraSensor;
};
