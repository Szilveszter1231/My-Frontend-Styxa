import { defineStore } from 'pinia'
import type { City } from '../types/city'

export const useCityStore = defineStore('cities', {
  state: () => ({
    cities: [] as City[],
    city: {} as City,
    isLoading: false,
  }),
  actions: {
    setIsLoading(value: boolean) {
      this.isLoading = value
    },

    async getCities() {
      try {
        this.isLoading = true
        const response = await fetch('http://localhost:3001/cities')
        const data = await response.json()
        if (data) {
          this.cities = data
        }
      } catch (error) {
        console.error(error)
      } finally {
        this.isLoading = false
      }
    },

    async getCityid(id: number) {
      try {
        const response = await fetch(`http://localhost:3001/cities/${id}`)
        const data = await response.json()
        if (data) {
          this.city = data[0]
        }
      } catch (error) {
        console.error(error)
      }
    },
    async addCity(city: Partial<City>) {
      try {
        const response = await fetch('http://localhost:3001/cities', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(city),
        })
        const data = await response.json()
        if (data) {
          this.cities.push(data)
        }
      } catch (error) {
        console.error(error)
      }
    },
    async DeleteCities(id: number) {
      try {
        const response = await fetch(`http://localhost:3001/cities/${id}`, {
          method: 'DELETE',
        })
        const data = await response.json()
        this.getCities()
        if (data) {
          this.city = data[0]
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
})
