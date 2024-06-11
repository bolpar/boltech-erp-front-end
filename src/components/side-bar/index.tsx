import {
  BarChart3Icon,
  ClipboardListIcon,
  CpuIcon,
  FileTextIcon,
  HeadsetIcon,
  PackageIcon,
  ScrollTextIcon,
  SettingsIcon,
  ShieldCheckIcon,
  ShoppingBagIcon,
  ShoppingBasketIcon,
  UsersIcon,
} from 'lucide-react'
import { Logo } from './logo'
import { NavItem } from './nav-item'
import { Profile } from './profile'

export const SideBar = () => {
  return (
    <nav className="fixed flex h-screen flex-col justify-between border-r bg-green-50 px-5 py-8 dark:border-borderDarkMode dark:bg-darkModeContrast/30">
      <div>
        <Logo />

        <div className="my-6 h-px w-full bg-zinc-200 dark:bg-borderDarkMode" />

        <NavItem title="Pendências" path="/" icon={ClipboardListIcon} />
        <NavItem
          title="Vendas"
          path="/vendas/dados"
          icon={ShoppingBasketIcon}
        />
        <NavItem title="Clientes" path="/clientes/pesquisa" icon={UsersIcon} />
        <NavItem title="Financeiro" path="/" icon={BarChart3Icon} />
        <NavItem title="Fornecedores" path="/" icon={PackageIcon} />
        <NavItem title="Relatórios" path="/" icon={FileTextIcon} />
        <NavItem
          title="Equipamentos e Chips"
          path="/equipamentos-e-chips/lista-de-equipamentos"
          icon={CpuIcon}
        />
        <NavItem title="Suporte" path="/" icon={HeadsetIcon} />
        <NavItem title="Configurações" path="/" icon={SettingsIcon} />
        <NavItem title="Emissão NFSE" path="/" icon={ScrollTextIcon} />
        <NavItem title="Compras" path="/" icon={ShoppingBagIcon} />
        <NavItem title="Garantia" path="/" icon={ShieldCheckIcon} />
      </div>

      <footer>
        <div className="my-6 h-px w-full bg-zinc-200 dark:bg-borderDarkMode" />
        <Profile />
      </footer>
    </nav>
  )
}
