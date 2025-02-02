import { defineStore } from 'pinia'
import type { POI } from '../types/poi'

export const usePOIStore = defineStore('poi', {
  state: () => ({
    pois: [] as POI[],
    poi: {} as POI,
    isLoading: false,
  }),
  actions: {
    setIsLoading(value: boolean) {
      this.isLoading = value
    },

    async getPOI() {
      try {
        this.isLoading = true
        const response = await fetch(`http://localhost:3001/poi`)
        const data = await response.json()
        if (data) {
          this.pois = data
        }
      } catch (error) {
        console.error(error)
      } finally {
        this.isLoading = false
      }
    },

    async getPOIid(id: number) {
      if (isNaN(id) || id === null) {
        console.error(400)
        return
      }

      try {
        const response = await fetch(`http://localhost:3001/poi/${id}`)
        if (!response.ok) {
          throw new Error(` ${response.statusText}`)
        }
        const data = await response.json()
        if (data && data.length > 0) {
          this.poi = data[0]
        } else {
          console.warn(id)
        }
      } catch (error) {
        console.error(error)
      }
    },
    async addPOI(poi: Partial<POI>) {
      try {
        const response = await fetch('http://localhost:3001/poi', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(poi),
        })
        const data = await response.json()
        if (data) {
          this.pois.push(data)
        }
      } catch (error) {
        console.error(error)
      }
    },

    async UpdatePoi(poi: POI) {
      try {
        const response = await fetch(`http://localhost:3001/poi/${poi.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(poi),
        })
        const data = await response.json()
        this.getPOI()
        if (data) {
          this.poi = data[0]
        }
      } catch (error) {
        console.error(error)
      }
    },
  },
})
