import { StoreLocation, TeamMember } from "../types/about.type";

export const teamMembers: TeamMember[] = [
  {
    name: "Alice Johnson",
    position: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    bio: "Alice founded the company in 2010 with a vision to create affordable, high-quality furniture for modern homes.",
  },
  {
    name: "Robert Chen",
    position: "Head of Design",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    bio: "With over 15 years of experience in furniture design, Robert leads our talented design team.",
  },
  {
    name: "Sarah Williams",
    position: "Operations Manager",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
    bio: "Sarah ensures that our supply chain runs smoothly and our customers receive their orders on time.",
  },
  {
    name: "Michael Thompson",
    position: "Customer Experience",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    bio: "Michael is dedicated to making sure every customer has an exceptional experience with our brand.",
  },
];

export const storeLocations: StoreLocation[] = [
  {
    city: "Los Angeles",
    address: "123 Furniture Lane, Design District, CA 90210",
    phone: "(555) 123-4567",
    hours: "Mon-Sat: 10am-8pm, Sun: 11am-6pm",
    image:
      "https://images.unsplash.com/photo-1577493340887-b7bfff550145?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    city: "New York",
    address: "456 Home Ave, SoHo, NY 10013",
    phone: "(555) 987-6543",
    hours: "Mon-Sat: 9am-9pm, Sun: 10am-7pm",
    image:
      "https://images.unsplash.com/photo-1555636222-cae831e670b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    city: "Chicago",
    address: "789 Comfort St, River North, IL 60654",
    phone: "(555) 456-7890",
    hours: "Mon-Sat: 10am-8pm, Sun: 11am-6pm",
    image:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
];
