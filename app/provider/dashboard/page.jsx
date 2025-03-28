"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { 
  Bell, 
  Calendar, 
  CreditCard, 
  Home, 
  LogOut, 
  Menu, 
  Search, 
  Settings, 
  User, 
  Store,
  FileText,
  BarChart4,
  Clock,
  Star
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Logo } from "@/components/logo"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProviderDashboard() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const handleLogout = () => {
    router.push("/login")
  }

  // Datos simulados
  const stats = [
    {
      title: "Servicios Activos",
      value: "8",
      change: "+2",
      changeType: "increase",
      icon: Store
    },
    {
      title: "Citas Pendientes",
      value: "12",
      change: "+5",
      changeType: "increase",
      icon: Calendar
    },
    {
      title: "Ingresos del Mes",
      value: "$850.000",
      change: "+15%",
      changeType: "increase",
      icon: CreditCard
    },
    {
      title: "Calificación",
      value: "4.8",
      change: "+0.2",
      changeType: "increase",
      icon: Star
    }
  ]

  const upcomingAppointments = [
    {
      id: 1,
      client: "María López",
      service: "Consulta Veterinaria",
      date: "Hoy - 15:30",
      status: "confirmada"
    },
    {
      id: 2,
      client: "Juan Pérez",
      service: "Peluquería Canina",
      date: "Mañana - 10:00",
      status: "pendiente"
    },
    {
      id: 3,
      client: "Ana García",
      service: "Paseo Canino",
      date: "29 Mar - 16:00",
      status: "confirmada"
    }
  ]

  const recentReviews = [
    {
      id: 1,
      client: "Carlos Rodríguez",
      service: "Consulta Veterinaria",
      rating: 5,
      comment: "Excelente servicio, muy profesional",
      date: "Hace 2 días"
    },
    {
      id: 2,
      client: "Laura Martínez",
      service: "Peluquería Canina",
      rating: 4,
      comment: "Buen trabajo, mi mascota quedó feliz",
      date: "Hace 3 días"
    }
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72">
            <div className="flex h-full flex-col">
              <div className="flex items-center gap-2 border-b p-4">
                <Logo />
              </div>
              <nav className="flex-1 overflow-auto py-4">
                <div className="grid gap-1 px-2">
                  <Link
                    href="/provider/dashboard"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary hover:bg-accent transition-all"
                  >
                    <Home className="h-5 w-5" />
                    Inicio
                  </Link>
                  <Link
                    href="/provider/appointments"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent transition-all"
                  >
                    <Calendar className="h-5 w-5" />
                    Citas
                  </Link>
                  <Link
                    href="/provider/services"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent transition-all"
                  >
                    <Store className="h-5 w-5" />
                    Mis Servicios
                  </Link>
                  <Link
                    href="/provider/earnings"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent transition-all"
                  >
                    <CreditCard className="h-5 w-5" />
                    Ganancias
                  </Link>
                  <Link
                    href="/provider/reviews"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent transition-all"
                  >
                    <Star className="h-5 w-5" />
                    Reseñas
                  </Link>
                  <Link
                    href="/provider/profile"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent transition-all"
                  >
                    <User className="h-5 w-5" />
                    Mi Perfil
                  </Link>
                </div>
              </nav>
              <div className="border-t p-4">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                  onClick={handleLogout}
                >
                  <LogOut className="h-5 w-5" />
                  Cerrar Sesión
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:gap-8">
          <Link href="/provider/dashboard" className="hidden md:block">
            <Logo />
          </Link>
          <div className="flex-1">
            <form className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar..."
                className="w-full pl-10 md:w-2/3 lg:w-1/2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="relative"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-600" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleLogout}
            className="hidden md:inline-flex"
          >
            <LogOut className="h-5 w-5" />
            <span className="sr-only">Cerrar sesión</span>
          </Button>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-72 shrink-0 border-r bg-background md:block">
          <div className="flex h-full flex-col">
            <nav className="flex-1 overflow-auto py-4">
              <div className="grid gap-1 px-2">
                <Link
                  href="/provider/dashboard"
                  className="flex items-center gap-3 rounded-lg bg-accent px-3 py-2 text-primary transition-all"
                >
                  <Home className="h-5 w-5" />
                  Inicio
                </Link>
                <Link
                  href="/provider/appointments"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent transition-all"
                >
                  <Calendar className="h-5 w-5" />
                  Citas
                </Link>
                <Link
                  href="/provider/services"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent transition-all"
                >
                  <Store className="h-5 w-5" />
                  Mis Servicios
                </Link>
                <Link
                  href="/provider/earnings"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent transition-all"
                >
                  <CreditCard className="h-5 w-5" />
                  Ganancias
                </Link>
                <Link
                  href="/provider/reviews"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent transition-all"
                >
                  <Star className="h-5 w-5" />
                  Reseñas
                </Link>
                <Link
                  href="/provider/profile"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent transition-all"
                >
                  <User className="h-5 w-5" />
                  Mi Perfil
                </Link>
              </div>
            </nav>
          </div>
        </aside>
        <main className="flex-1 overflow-auto">
          <div className="container py-6 space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Panel de Proveedor</h1>
              <p className="text-muted-foreground">Bienvenido al panel de control de PawCare</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <Card key={index}>
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                      <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                      <Icon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <p className={`text-xs ${
                        stat.changeType === "increase" 
                          ? "text-green-600" 
                          : "text-red-600"
                      }`}>
                        {stat.change} desde el mes pasado
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Próximas Citas</CardTitle>
                  <CardDescription>Citas programadas para los próximos días</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="flex items-center justify-between rounded-lg border p-4"
                    >
                      <div className="space-y-1">
                        <p className="text-sm font-medium">{appointment.client}</p>
                        <p className="text-sm text-muted-foreground">{appointment.service}</p>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <p className="text-xs text-muted-foreground">{appointment.date}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          appointment.status === "confirmada" 
                            ? "bg-green-100 text-green-600" 
                            : "bg-yellow-100 text-yellow-600"
                        }`}>
                          {appointment.status}
                        </span>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm">Ver detalles</Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Detalles de la Cita</DialogTitle>
                              <DialogDescription>
                                Información detallada de la cita con {appointment.client}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <Label>Cliente</Label>
                                  <p className="text-sm">{appointment.client}</p>
                                </div>
                                <div>
                                  <Label>Servicio</Label>
                                  <p className="text-sm">{appointment.service}</p>
                                </div>
                                <div>
                                  <Label>Fecha y Hora</Label>
                                  <p className="text-sm">{appointment.date}</p>
                                </div>
                                <div>
                                  <Label>Estado</Label>
                                  <p className="text-sm">{appointment.status}</p>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <Label>Acciones</Label>
                                <div className="flex gap-2">
                                  <Button variant="outline" className="w-full">
                                    Confirmar
                                  </Button>
                                  <Button variant="outline" className="w-full">
                                    Reagendar
                                  </Button>
                                  <Button variant="outline" className="w-full">
                                    Cancelar
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/provider/appointments">Ver todas las citas</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Reseñas Recientes</CardTitle>
                  <CardDescription>Últimas reseñas de tus servicios</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentReviews.map((review) => (
                    <div
                      key={review.id}
                      className="flex items-center justify-between rounded-lg border p-4"
                    >
                      <div className="space-y-1">
                        <p className="text-sm font-medium">{review.client}</p>
                        <p className="text-sm text-muted-foreground">{review.service}</p>
                        <p className="text-xs text-muted-foreground">{review.date}</p>
                        <p className="text-sm mt-2">{review.comment}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/provider/reviews">Ver todas las reseñas</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
