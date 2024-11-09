import { Client, Company } from "../schemas/budget"

export function budgetHeader (company: Company, client: Client): string{
  const header =  `
  <div class="company">
    <div class="logo">
      <img src="https://images.unsplash.com/photo-1719937206220-f7c76cc23d78?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
    </div>
    <div class="company-info">
      <div>
        <p>${company.name}</p>
        <p>${company.email}</p>
        <p>${company.address}</p>
      </div>
      <div>
        <p>${company.id}</p>
        <p>${company.fone}</p>
      </div>
    </div>
  </div>

  <div class="client">
    <div>
      <p style="width: 300px;">${client.name}</p>
      <p style="width: 200px;">${client.id}</p>
      <p style="width: 150px;">${client.fone}</p>
    </div>
    <div>
      <p style="width: 300px;">${client.email}</p>
      <p style="width: 363px;">${client.address}</p>
    </div>
  </div>
  `

  return header
}