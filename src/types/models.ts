export interface Model {
  id: string;
  name: string;
  category: "male" | "female";
  imagePerfil: string;
  imageBook: string[];
  description: string;
  specialties?: string[];
}

// Declaração para o arquivo JSON
export type ModelsData = Model[];

export interface Workshop {
  id: string;
  title: string;
  description: string;
  instructor: string;
  date: string;
  duration: string;
  price: string;
  image: string;
  category: "fotografia" | "desfile" | "posando" | "maquiagem" | "estilo";
  level: "iniciante" | "intermediario" | "avancado";
  spots: number;
  available: number;
  location: string;
  tags: string[];
  status?: "available" | "limited" | "almost-full";
}

export interface UpcomingWorkshop {
  id: string;
  title: string;
  date: string;
  available: number;
  status: "available" | "limited" | "almost-full";
}
