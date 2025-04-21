"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Logo } from "@/components/logo"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError("") // Limpiar error al cambiar los datos
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // Permitir cualquier usuario/contraseña para pruebas
      await new Promise((resolve) => setTimeout(resolve, 1000))
      if (formData.email.includes("provider")) {
        router.push("/provider/dashboard")
      } else if (formData.email.includes("admin")) {
        router.push("/admin/dashboard")
      } else {
        router.push("/client/dashboard")
      }
    } catch (error) {
      setError("Error inesperado. Intenta de nuevo.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background/50 px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <Link href="/">
              <Logo size="large" />
            </Link>
          </div>
          <CardTitle className="text-2xl font-bold">Iniciar Sesión</CardTitle>
          <CardDescription>
            Ingresa tus credenciales para acceder a tu cuenta
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">
                Correo electrónico
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">
                  Contraseña
                </Label>
                <Link 
                  href="/forgot-password" 
                  className="text-xs text-secondary hover:underline"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
            </div>
            {error && (
              <div className="text-sm text-red-500 text-center">
                {error}
              </div>
            )}
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button 
              type="submit" 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90" 
              disabled={isLoading}
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
            </Button>
            <p className="text-sm text-center text-muted-foreground">
              ¿No tienes una cuenta?{" "}
              <Link href="/register" className="text-secondary hover:underline">
                Regístrate aquí
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
