import Link from "next/link"
import { ArrowLeft, Search, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export default function ServicesPage() {
  // Datos simulados de servicios
  const services = [
    {
      id: 1,
      name: "Consulta Veterinaria General",
      provider: "Clínica Veterinaria PetHealth",
      rating: 4.8,
      reviews: 124,
      price: "$45.000",
      image: "/placeholder.svg?height=200&width=300",
      description:
        "Evaluación completa del estado de salud de tu mascota, incluyendo revisión física y recomendaciones de cuidado.",
    },
    {
      id: 2,
      name: "Peluquería Canina Completa",
      provider: "Estética Canina Feliz",
      rating: 4.7,
      reviews: 98,
      price: "$35.000",
      image: "/placeholder.svg?height=200&width=300",
      description:
        "Incluye baño con shampoo especial, secado, corte de pelo según raza, corte de uñas y limpieza de oídos.",
    },
    {
      id: 3,
      name: "Paseo Premium (1 hora)",
      provider: "PaseaDog",
      rating: 4.9,
      reviews: 56,
      price: "$20.000",
      image: "/placeholder.svg?height=200&width=300",
      description: "Paseo personalizado de una hora con cuidador certificado. Incluye recogida y entrega a domicilio.",
    },
    {
      id: 4,
      name: "Entrenamiento Básico",
      provider: "Canine Academy",
      rating: 4.6,
      reviews: 42,
      price: "$50.000",
      image: "/placeholder.svg?height=200&width=300",
      description:
        "Sesión de entrenamiento para enseñar comandos básicos como sentarse, quedarse y venir cuando se le llama.",
    },
    {
      id: 5,
      name: "Hospedaje por Día",
      provider: "Casa Mascota",
      rating: 4.8,
      reviews: 75,
      price: "$30.000",
      image: "/placeholder.svg?height=200&width=300",
      description: "Alojamiento en hogar verificado con cuidados personalizados, alimentación y paseos incluidos.",
    },
    {
      id: 6,
      name: "Vacunación",
      provider: "Clínica Veterinaria PetHealth",
      rating: 4.9,
      reviews: 112,
      price: "$35.000",
      image: "/placeholder.svg?height=200&width=300",
      description: "Aplicación de vacunas esenciales para mantener a tu mascota protegida contra enfermedades comunes.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-lg font-semibold">PawCare</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="container max-w-screen-xl">
          <div className="flex flex-col gap-4 md:gap-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold tracking-tight">Servicios para mascotas</h1>
              <p className="text-muted-foreground">Encuentra el servicio ideal para tu mascota</p>
            </div>

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Buscar servicios..." className="w-full pl-8" />
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Select defaultValue="all">
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas las categorías</SelectItem>
                    <SelectItem value="veterinary">Veterinaria</SelectItem>
                    <SelectItem value="grooming">Peluquería</SelectItem>
                    <SelectItem value="walking">Paseos</SelectItem>
                    <SelectItem value="training">Entrenamiento</SelectItem>
                    <SelectItem value="boarding">Hospedaje</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="rating">
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Ordenar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Mejor valorados</SelectItem>
                    <SelectItem value="price_low">Precio: menor a mayor</SelectItem>
                    <SelectItem value="price_high">Precio: mayor a menor</SelectItem>
                    <SelectItem value="reviews">Más reseñas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Separator className="my-2" />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card key={service.id} className="overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.name}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex flex-col space-y-2">
                      <h3 className="font-bold">{service.name}</h3>
                      <p className="text-sm text-muted-foreground">{service.provider}</p>
                      <p className="text-sm line-clamp-2">{service.description}</p>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{service.rating}</span>
                        <span className="text-sm text-muted-foreground">({service.reviews} reseñas)</span>
                        <span className="ml-auto font-bold">{service.price}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button asChild className="w-full">
                      <Link href={`/services/${service.id}`}>Reservar</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t bg-muted/40">
        <div className="container flex flex-col gap-2 py-4 text-center text-sm text-muted-foreground md:py-6">
          <p>© 2025 PawCare. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

