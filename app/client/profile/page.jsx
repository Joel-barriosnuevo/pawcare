"use client"

import { useState, useEffect } from "react"
import { Camera, Save } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ClientProfile() {
  // Datos simulados del perfil
  // El nombre y email deben venir del registro, el resto vacío
  const [profile, setProfile] = useState({
    name: "Usuario Nuevo", // Reemplaza por el valor real del registro si está disponible
    email: "usuario@email.com", // Reemplaza por el valor real del registro si está disponible
    phone: "",
    address: "",
    pets: [],
  })

  const [newPet, setNewPet] = useState({
    name: "",
    type: "",
    breed: "",
    age: "",
    weight: "",
    notes: "",
    image: "",
  })

  const [petImagePreview, setPetImagePreview] = useState("");

  // Define baseUrl para imágenes locales (ajusta si tu subcarpeta de deploy es distinta)
  const baseUrl = process.env.NEXT_PUBLIC_BASE_PATH || "";

  // Cargar datos del usuario desde localStorage al montar
  useEffect(() => {
    const storedUser = localStorage.getItem("pawcare_user")
    if (storedUser) {
      const userData = JSON.parse(storedUser)
      setProfile((prev) => ({
        ...prev,
        name: userData.name || prev.name,
        email: userData.email || prev.email,
      }))
    }
  }, [])

  const handleProfileUpdate = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para actualizar el perfil
    console.log("Perfil actualizado", profile)
  }

  const handleAddPet = (e) => {
    e.preventDefault();
    const pet = {
      id: profile.pets.length + 1,
      ...newPet,
    };
    setProfile({
      ...profile,
      pets: [...profile.pets, pet],
    });
    setNewPet({
      name: "",
      type: "",
      breed: "",
      age: "",
      weight: "",
      notes: "",
      image: "",
    });
    setPetImagePreview("");
  };

  const handlePetImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPetImagePreview(reader.result);
        setNewPet((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Mi Perfil</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="shadow-xl border-0 bg-gradient-to-br from-white via-slate-50 to-secondary/10 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-primary">
              <img src={`${baseUrl}/logo.png`} alt="Logo PawCare" className="h-8 w-8 rounded-full shadow-lg border-2 border-accent bg-white object-cover" /> Información Personal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleProfileUpdate} className="space-y-4">
              <div className="flex justify-center mb-6">
                <div className="relative group">
                  <Avatar className="h-24 w-24 ring-4 ring-accent/30 transition-transform duration-300 group-hover:scale-105">
                    <AvatarImage src="/avatars/01.png" />
                    <AvatarFallback>{profile.name?.[0] || "U"}</AvatarFallback>
                  </Avatar>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute bottom-0 right-0 rounded-full shadow-lg bg-accent hover:bg-accent/80 animate-fade-in"
                    type="button"
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
                  placeholder="Agrega tu nombre completo"
                  className="transition-shadow focus:ring-2 focus:ring-accent"
                  autoComplete="name"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  placeholder="Agrega tu correo electrónico"
                  className="transition-shadow focus:ring-2 focus:ring-accent"
                  autoComplete="email"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  id="phone"
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  placeholder="Agrega tu número de teléfono"
                  className="transition-shadow focus:ring-2 focus:ring-accent"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="address">Dirección</Label>
                <Input
                  id="address"
                  value={profile.address}
                  onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                  placeholder="Agrega tu dirección"
                  className="transition-shadow focus:ring-2 focus:ring-accent"
                />
              </div>

              <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white shadow-md transition-transform duration-200 hover:scale-105 animate-fade-in">
                <Save className="h-4 w-4 mr-2" /> Guardar Cambios
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="shadow-xl border-0 bg-gradient-to-br from-white via-slate-50 to-accent/10 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-primary">
              <img src={`${baseUrl}/logo.png`} alt="Logo PawCare" className="h-8 w-8 rounded-full shadow-lg border-2 border-accent bg-white object-cover" /> Mis Mascotas
            </CardTitle>
          </CardHeader>
          <CardContent>
            {profile.pets.length === 0 ? (
              <div className="flex flex-col items-center py-12 animate-fade-in">
                <img src="https://images.unsplash.com/photo-1518715308788-30057527ade5?auto=format&fit=crop&w=400&q=80" alt="No hay mascotas" className="w-48 h-48 object-cover rounded-lg mb-6 shadow-lg" />
                <h2 className="text-2xl font-bold mb-2 text-primary">¡Aún no tienes mascotas!</h2>
                <p className="text-muted-foreground mb-4">Agrega tu primera mascota para empezar a reservar servicios.</p>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Tus Mascotas</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {profile.pets.map((pet) => (
                    <Card key={pet.id} className="shadow-md animate-fade-in border border-accent/30">
                      <CardHeader className="flex flex-row items-center gap-4">
                        <Avatar className="h-20 w-20 ring-2 ring-accent/30">
                          <AvatarImage src={pet.image || '/file.svg'} alt={pet.name} />
                          <AvatarFallback>{pet.name?.[0] || "M"}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-bold text-xl text-primary">{pet.name}</div>
                          <div className="text-sm text-muted-foreground mb-1">{pet.type} {pet.breed && `- ${pet.breed}`}</div>
                          <div className="flex gap-2 text-xs text-gray-600">
                            <span>Edad: <span className="font-semibold">{pet.age}</span> años</span>
                            <span>Peso: <span className="font-semibold">{pet.weight}</span> kg</span>
                          </div>
                          {pet.notes && (
                            <div className="text-xs mt-1 text-gray-500 italic">{pet.notes}</div>
                          )}
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="shadow-xl border-0 bg-gradient-to-br from-white via-slate-50 to-accent/10 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-primary">
              <img src={`${baseUrl}/logo.png`} alt="Logo PawCare" className="h-8 w-8 rounded-full shadow-lg border-2 border-accent bg-white object-cover" /> Agregar Nueva Mascota
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddPet} className="space-y-4 animate-fade-in">
              <div className="grid gap-2">
                <Label htmlFor="pet-name">Nombre</Label>
                <Input
                  id="pet-name"
                  value={newPet.name}
                  onChange={(e) => setNewPet({ ...newPet, name: e.target.value })}
                  className="transition-shadow focus:ring-2 focus:ring-accent"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="pet-type">Tipo de mascota</Label>
                <Input
                  id="pet-type"
                  value={newPet.type}
                  onChange={(e) => setNewPet({ ...newPet, type: e.target.value })}
                  placeholder="Ej: Perro, Gato, etc."
                  className="transition-shadow focus:ring-2 focus:ring-accent"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="pet-breed">Raza</Label>
                <Input
                  id="pet-breed"
                  value={newPet.breed}
                  onChange={(e) => setNewPet({ ...newPet, breed: e.target.value })}
                  className="transition-shadow focus:ring-2 focus:ring-accent"
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
                    className="transition-shadow focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="pet-weight">Peso (kg)</Label>
                  <Input
                    id="pet-weight"
                    type="number"
                    value={newPet.weight}
                    onChange={(e) => setNewPet({ ...newPet, weight: e.target.value })}
                    className="transition-shadow focus:ring-2 focus:ring-accent"
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
                  className="transition-shadow focus:ring-2 focus:ring-accent"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="pet-image">Foto de la mascota</Label>
                <Input
                  id="pet-image"
                  type="file"
                  accept="image/*"
                  onChange={handlePetImageChange}
                  className="transition-shadow focus:ring-2 focus:ring-accent"
                />
                {petImagePreview && (
                  <img
                    src={petImagePreview}
                    alt="Vista previa"
                    className="w-32 h-32 object-cover rounded-lg mt-2 shadow border border-accent/40"
                  />
                )}
              </div>

              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white shadow-md transition-transform duration-200 hover:scale-105 animate-fade-in">
                Agregar Mascota
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
