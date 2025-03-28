"use client"

import { useState } from "react"
import { Camera, Save } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ClientProfile() {
  // Datos simulados del perfil
  const [profile, setProfile] = useState({
    name: "Juan Pérez",
    email: "juan@example.com",
    phone: "+506 8888-8888",
    address: "San José, Costa Rica",
    pets: [
      {
        id: 1,
        name: "Max",
        type: "Perro",
        breed: "Golden Retriever",
        age: 3,
        weight: "25",
        notes: "Alérgico a ciertos tipos de alimentos",
      },
      {
        id: 2,
        name: "Luna",
        type: "Gato",
        breed: "Siamés",
        age: 2,
        weight: "4",
        notes: "Muy tranquila, le gusta dormir",
      },
    ],
  })

  const [newPet, setNewPet] = useState({
    name: "",
    type: "",
    breed: "",
    age: "",
    weight: "",
    notes: "",
  })

  const handleProfileUpdate = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para actualizar el perfil
    console.log("Perfil actualizado", profile)
  }

  const handleAddPet = (e) => {
    e.preventDefault()
    const pet = {
      id: profile.pets.length + 1,
      ...newPet,
    }
    setProfile({
      ...profile,
      pets: [...profile.pets, pet],
    })
    setNewPet({
      name: "",
      type: "",
      breed: "",
      age: "",
      weight: "",
      notes: "",
    })
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Mi Perfil</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Información Personal</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleProfileUpdate} className="space-y-4">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/avatars/01.png" />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute bottom-0 right-0 rounded-full"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="name">Nombre completo</Label>
                <Input
                  id="name"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  id="phone"
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="address">Dirección</Label>
                <Input
                  id="address"
                  value={profile.address}
                  onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                />
              </div>

              <Button type="submit" className="w-full">
                <Save className="mr-2 h-4 w-4" />
                Guardar Cambios
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Mis Mascotas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {profile.pets.map((pet) => (
                  <Card key={pet.id}>
                    <CardContent className="pt-6">
                      <div className="grid gap-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{pet.name}</span>
                          <Button variant="ghost" size="sm">
                            Editar
                          </Button>
                        </div>
                        <div className="text-sm text-gray-600">
                          {pet.type} - {pet.breed}
                        </div>
                        <div className="text-sm">
                          <span className="text-gray-600">Edad:</span> {pet.age} años
                        </div>
                        <div className="text-sm">
                          <span className="text-gray-600">Peso:</span> {pet.weight} kg
                        </div>
                        {pet.notes && (
                          <div className="text-sm">
                            <span className="text-gray-600">Notas:</span> {pet.notes}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Agregar Nueva Mascota</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddPet} className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="pet-name">Nombre</Label>
                  <Input
                    id="pet-name"
                    value={newPet.name}
                    onChange={(e) => setNewPet({ ...newPet, name: e.target.value })}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="pet-type">Tipo de mascota</Label>
                  <Input
                    id="pet-type"
                    value={newPet.type}
                    onChange={(e) => setNewPet({ ...newPet, type: e.target.value })}
                    placeholder="Ej: Perro, Gato, etc."
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="pet-breed">Raza</Label>
                  <Input
                    id="pet-breed"
                    value={newPet.breed}
                    onChange={(e) => setNewPet({ ...newPet, breed: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="pet-age">Edad (años)</Label>
                    <Input
                      id="pet-age"
                      type="number"
                      value={newPet.age}
                      onChange={(e) => setNewPet({ ...newPet, age: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="pet-weight">Peso (kg)</Label>
                    <Input
                      id="pet-weight"
                      type="number"
                      value={newPet.weight}
                      onChange={(e) => setNewPet({ ...newPet, weight: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="pet-notes">Notas adicionales</Label>
                  <Textarea
                    id="pet-notes"
                    value={newPet.notes}
                    onChange={(e) => setNewPet({ ...newPet, notes: e.target.value })}
                    placeholder="Alergias, condiciones especiales, etc."
                  />
                </div>

                <Button type="submit" className="w-full">
                  Agregar Mascota
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
