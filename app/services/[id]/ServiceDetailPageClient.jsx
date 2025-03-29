"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Clock, DollarSign, MapPin, Star, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function ServiceDetailPageClient({ params }) {
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")

  // Datos simulados del servicio
  const service = {
    id: Number.parseInt(params.id),
    name: "Consulta Veterinaria General",
    provider: "Clínica Veterinaria PetHealth",
    rating: 4.8,
    reviews: 124,
    price: "$45.000",
    duration: "30 minutos",
    location: "Calle Principal #123, Barranquilla",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Evaluación completa del estado de salud de tu mascota, incluyendo revisión física y recomendaciones de cuidado. Nuestros veterinarios certificados realizarán un examen detallado para asegurar el bienestar de tu mascota.",
    longDescription:
      "La consulta veterinaria general es un servicio esencial para mantener la salud de tu mascota. Durante la consulta, nuestros veterinarios realizarán:\n\n- Examen físico completo\n- Revisión de signos vitales\n- Evaluación de peso y condición corporal\n- Revisión de vacunas y desparasitación\n- Recomendaciones de alimentación y cuidados\n\nEste servicio es recomendado al menos una vez al año para mascotas adultas sanas y con mayor frecuencia para cachorros, mascotas mayores o con condiciones crónicas.",
  }

  // Datos simulados de reseñas
  const reviews = [
    {
      id: 1,
      user: "Carlos Rodríguez",
      rating: 5,
      date: "10 de marzo, 2025",
      comment:
        "Excelente servicio, el veterinario fue muy amable y profesional. Mi perro se sintió cómodo durante toda la consulta.",
    },
    {
      id: 2,
      user: "María López",
      rating: 4,
      date: "5 de marzo, 2025",
      comment:
        "Buena atención y diagnóstico acertado. El único inconveniente fue que tuve que esperar un poco más de lo programado.",
    },
    {
      id: 3,
      user: "Juan Pérez",
      rating: 5,
      date: "28 de febrero, 2025",
      comment:
        "Muy satisfecho con la consulta. El doctor explicó todo detalladamente y respondió todas mis dudas sobre la salud de mi gato.",
    },
  ]

  // Datos simulados de horarios disponibles
  const availableDates = ["2025-04-15", "2025-04-16", "2025-04-17", "2025-04-18", "2025-04-19"]
  const availableTimes = ["09:00", "10:00", "11:00", "12:00", "15:00", "16:00", "17:00"]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4 md:px-6">
          <Link href="/services" className="flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-lg font-semibold">Volver a servicios</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="container max-w-screen-xl">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="flex flex-col gap-6">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <h1 className="text-3xl font-bold tracking-tight">{service.name}</h1>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 font-medium">{service.rating}</span>
                      <span className="ml-1 text-muted-foreground">({service.reviews} reseñas)</span>
                    </div>
                    <Separator orientation="vertical" className="h-5" />
                    <span className="text-muted-foreground">{service.provider}</span>
                  </div>
                </div>

                <Tabs defaultValue="description">
                  <TabsList>
                    <TabsTrigger value="description">Descripción</TabsTrigger>
                    <TabsTrigger value="reviews">Reseñas</TabsTrigger>
                  </TabsList>
                  <TabsContent value="description" className="mt-4 space-y-4">
                    <div>
                      <h2 className="text-xl font-bold">Acerca de este servicio</h2>
                      <p className="mt-2">{service.description}</p>
                      <div className="mt-4 whitespace-pre-line">{service.longDescription}</div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Duración</p>
                          <p className="text-sm text-muted-foreground">{service.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Precio</p>
                          <p className="text-sm text-muted-foreground">{service.price}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Proveedor</p>
                          <p className="text-sm text-muted-foreground">{service.provider}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Ubicación</p>
                          <p className="text-sm text-muted-foreground">{service.location}</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="reviews" className="mt-4 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col items-center">
                        <div className="text-3xl font-bold">{service.rating}</div>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${
                                star <= Math.floor(service.rating)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                        <div className="text-sm text-muted-foreground">{service.reviews} reseñas</div>
                      </div>
                      <Separator orientation="vertical" className="h-16" />
                      <div className="flex-1">
                        <div className="space-y-1">
                          {[5, 4, 3, 2, 1].map((rating) => {
                            const count = reviews.filter((r) => r.rating === rating).length
                            const percentage = (count / reviews.length) * 100
                            return (
                              <div key={rating} className="flex items-center gap-2">
                                <div className="flex w-20 items-center">
                                  <span className="text-sm">{rating}</span>
                                  <Star className="ml-1 h-3 w-3 fill-yellow-400 text-yellow-400" />
                                </div>
                                <div className="h-2 flex-1 rounded-full bg-muted">
                                  <div
                                    className="h-2 rounded-full bg-yellow-400"
                                    style={{ width: `${percentage}%` }}
                                  ></div>
                                </div>
                                <div className="w-10 text-right text-sm text-muted-foreground">{count}</div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-6">
                      {reviews.map((review) => (
                        <div key={review.id} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="font-medium">{review.user}</div>
                            <div className="text-sm text-muted-foreground">{review.date}</div>
                          </div>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${
                                  star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-sm">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            <div>
              <Card className="sticky top-20">
                <CardHeader>
                  <CardTitle>Reservar este servicio</CardTitle>
                  <CardDescription>Selecciona fecha y hora para tu reserva</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Fecha</Label>
                    <Select value={selectedDate} onValueChange={setSelectedDate}>
                      <SelectTrigger id="date">
                        <SelectValue placeholder="Selecciona una fecha" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableDates.map((date) => (
                          <SelectItem key={date} value={date}>
                            {new Date(date).toLocaleDateString("es-ES", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Hora</Label>
                    <Select value={selectedTime} onValueChange={setSelectedTime} disabled={!selectedDate}>
                      <SelectTrigger id="time">
                        <SelectValue placeholder="Selecciona una hora" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableTimes.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pet">Mascota</Label>
                    <Select>
                      <SelectTrigger id="pet">
                        <SelectValue placeholder="Selecciona tu mascota" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="max">Max (Perro)</SelectItem>
                        <SelectItem value="luna">Luna (Gato)</SelectItem>
                        <SelectItem value="new">+ Añadir nueva mascota</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Notas adicionales</Label>
                    <Textarea
                      id="notes"
                      placeholder="Información adicional para el prestador de servicios"
                      className="min-h-[80px]"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <div className="flex items-center justify-between w-full">
                    <div className="text-sm">Precio:</div>
                    <div className="font-bold">{service.price}</div>
                  </div>
                  <Button className="w-full" disabled={!selectedDate || !selectedTime}>
                    Confirmar reserva
                  </Button>
                  <div className="text-xs text-center text-muted-foreground">
                    No se realizará ningún cargo hasta que el prestador confirme la reserva
                  </div>
                </CardFooter>
              </Card>
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

