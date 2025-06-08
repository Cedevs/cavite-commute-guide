
import React, { useState } from 'react';
import { MapPin, Clock, DollarSign, ArrowRight, Bus, Train } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const caviteCities = [
  {
    id: 'dasmarinas',
    name: 'Dasmariñas',
    description: 'Gateway to Cavite, known for De La Salle University',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop',
    population: '703,141',
    routes: [
      {
        from: 'Manila',
        to: 'Dasmariñas',
        type: 'Bus',
        duration: '1.5-2 hours',
        fare: '₱35-50',
        instructions: 'Take DLTB or Tritran bus from Buendia, Cubao, or Lawton'
      },
      {
        from: 'Makati',
        to: 'Dasmariñas',
        type: 'UV Express',
        duration: '1-1.5 hours',
        fare: '₱45-60',
        instructions: 'UV Express from Ayala MRT station to Dasmariñas public market'
      }
    ]
  },
  {
    id: 'imus',
    name: 'Imus',
    description: 'Capital city, birthplace of Philippine flag',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop',
    population: '496,794',
    routes: [
      {
        from: 'Manila',
        to: 'Imus',
        type: 'Bus',
        duration: '1-1.5 hours',
        fare: '₱30-45',
        instructions: 'DLTB or Tritran bus from Buendia, stop at Imus public market'
      },
      {
        from: 'LRT Baclaran',
        to: 'Imus',
        type: 'Jeepney',
        duration: '45 minutes',
        fare: '₱25-35',
        instructions: 'Jeepney from Baclaran to Imus via Bacoor'
      }
    ]
  },
  {
    id: 'bacoor',
    name: 'Bacoor',
    description: 'Historic city, site of Battle of Bacoor',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
    population: '664,625',
    routes: [
      {
        from: 'LRT Baclaran',
        to: 'Bacoor',
        type: 'Jeepney',
        duration: '30-45 minutes',
        fare: '₱20-30',
        instructions: 'Direct jeepney from Baclaran terminal to Bacoor'
      },
      {
        from: 'Manila',
        to: 'Bacoor',
        type: 'Bus',
        duration: '1-1.5 hours',
        fare: '₱28-40',
        instructions: 'DLTB bus from various terminals, stop at Bacoor'
      }
    ]
  },
  {
    id: 'kawit',
    name: 'Kawit',
    description: 'Birthplace of Philippine independence',
    image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop',
    population: '107,535',
    routes: [
      {
        from: 'Manila',
        to: 'Kawit',
        type: 'Bus',
        duration: '1.5-2 hours',
        fare: '₱40-55',
        instructions: 'DLTB bus from Buendia or Cubao to Kawit town proper'
      },
      {
        from: 'Bacoor',
        to: 'Kawit',
        type: 'Tricycle/Jeepney',
        duration: '15-20 minutes',
        fare: '₱15-25',
        instructions: 'Local tricycle or jeepney from Bacoor to Kawit'
      }
    ]
  },
  {
    id: 'general-trias',
    name: 'General Trias',
    description: 'Named after Mariano Trías, growing suburban city',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop',
    population: '450,583',
    routes: [
      {
        from: 'Manila',
        to: 'General Trias',
        type: 'Bus',
        duration: '2-2.5 hours',
        fare: '₱45-65',
        instructions: 'DLTB or Tritran bus from Manila terminals to Gen. Trias'
      },
      {
        from: 'Dasmariñas',
        to: 'General Trias',
        type: 'Jeepney',
        duration: '30-45 minutes',
        fare: '₱20-30',
        instructions: 'Jeepney from Dasmariñas to General Trias town center'
      }
    ]
  },
  {
    id: 'tagaytay',
    name: 'Tagaytay',
    description: 'Cool climate city with Taal Volcano view',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
    population: '85,330',
    routes: [
      {
        from: 'Manila',
        to: 'Tagaytay',
        type: 'Bus',
        duration: '2-3 hours',
        fare: '₱65-85',
        instructions: 'DLTB or Tritran bus from Manila to Tagaytay Rotonda'
      },
      {
        from: 'Nasugbu, Batangas',
        to: 'Tagaytay',
        type: 'Jeepney',
        duration: '1-1.5 hours',
        fare: '₱35-50',
        instructions: 'Jeepney via scenic coastal route through Alfonso'
      }
    ]
  }
];

const Index = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  if (selectedCity) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-ph-blue/10 via-ph-white to-ph-red/10">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <Button 
              onClick={() => setSelectedCity(null)}
              variant="outline"
              className="mb-4 border-ph-blue text-ph-blue hover:bg-ph-blue hover:text-white"
            >
              ← Back to Cities
            </Button>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <img 
                  src={selectedCity.image} 
                  alt={selectedCity.name}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold text-ph-blue">{selectedCity.name}</h1>
                <p className="text-lg text-gray-600">{selectedCity.description}</p>
                <div className="flex items-center space-x-4">
                  <Badge variant="secondary" className="bg-ph-yellow text-ph-blue">
                    Population: {selectedCity.population}
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-ph-blue mb-6">How to Get There</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectedCity.routes.map((route, index) => (
                <Card key={index} className="border-ph-blue/20 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-ph-blue flex items-center">
                        {route.type === 'Bus' ? <Bus className="mr-2" size={20} /> : 
                         route.type === 'Train' ? <Train className="mr-2" size={20} /> : 
                         <MapPin className="mr-2" size={20} />}
                        {route.from} → {route.to}
                      </CardTitle>
                      <Badge className="bg-ph-red text-white">{route.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Clock size={16} className="text-ph-blue" />
                        <span className="text-sm">{route.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign size={16} className="text-ph-red" />
                        <span className="text-sm font-semibold">{route.fare}</span>
                      </div>
                    </div>
                    <div className="bg-ph-yellow/10 p-4 rounded-lg">
                      <p className="text-sm text-gray-700">{route.instructions}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-ph-blue/10 via-ph-white to-ph-red/10">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-ph-blue to-ph-red text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Cavite Commute Guide
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up">
            Your comprehensive guide to traveling around the Historic Province of Cavite
          </p>
          <div className="flex justify-center items-center space-x-2 animate-fade-in-up">
            <div className="w-8 h-6 bg-ph-blue"></div>
            <div className="w-8 h-6 bg-ph-red"></div>
            <div className="w-8 h-6 bg-ph-yellow"></div>
            <span className="ml-4 text-lg">Honoring our Heritage</span>
          </div>
        </div>
      </div>

      {/* Cities Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-ph-blue mb-4">Explore Cavite Cities</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Click on any city to discover the best routes, fare information, and travel times 
            from major transportation hubs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caviteCities.map((city, index) => (
            <Card 
              key={city.id}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300 border-ph-blue/20 hover:shadow-xl hover:border-ph-blue/40"
              onClick={() => setSelectedCity(city)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={city.image} 
                  alt={city.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ph-blue/20 to-transparent"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-ph-blue group-hover:text-ph-red transition-colors flex items-center justify-between">
                  {city.name}
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {city.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="border-ph-yellow text-ph-blue">
                    Pop: {city.population}
                  </Badge>
                  <Badge className="bg-ph-red text-white">
                    {city.routes.length} Routes
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-ph-blue text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Cavite: Cradle of Philippine Revolution</h3>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            From the historic Aguinaldo Shrine in Kawit to the modern developments of Dasmariñas, 
            Cavite continues to play a vital role in Philippine history and progress.
          </p>
          <div className="mt-8 flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-ph-yellow">1898</div>
              <div className="text-sm">Independence Declared</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-ph-yellow">23</div>
              <div className="text-sm">Municipalities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-ph-yellow">4M+</div>
              <div className="text-sm">Population</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
