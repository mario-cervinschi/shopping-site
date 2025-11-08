# Structure info

### components
* common - Generic components (Button, Inputs...)
* layout - Structural components (Header, Footer...). **Modify Layout.tsx to add the Header and Footer (and anything else)**
* features - Componente specifice partilor de business (ProductCard, CartItem...)

### pages
* the pages that will exist on our website (main routes)

### hooks
* custom made hooks (cart, auth...)

### context
* custom context providers

### services
* api calls & external services (+ local storage)

### routes
* main / public & private routes

### theme 
* dark/white theme and colours

### types
* object interfaces

### utils 
* extra utility functions (e.g. validators)


# Combination of colours for components (use ctrl+f if needed)
> with Tailwind, not MaterialUI

# Buttons

### Primary actions button

`<Button variant="contained" 
color="primary"
  className="bg-brand-500 hover:bg-brand-600 text-white">
  Text
</Button>`

### Secondary actions button

`<Button 
  variant="contained" 
  color="secondary"
  className="bg-accent-500 hover:bg-accent-600 text-white">
  Text
</Button>`

### Tertiary actions button (cancel, back..)

`<Button 
  variant="outlined"
  className="border-2 border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800">
  Text
</Button>`

### Text Button (links, minor actions)

`<Button 
  variant="text"
  className="text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900/20">
  Text
</Button>`

### Success Button

`<Button 
  className="bg-success-500 hover:bg-success-600 text-white">
  Text
</Button>`

### Danger Button

`<Button 
  className="bg-red-500 hover:bg-red-600 text-white">
  Text
</Button>`

### Disabled Button 

`<Button 
  disabled
  className="bg-neutral-200 dark:bg-neutral-700 text-neutral-400 dark:text-neutral-500 cursor-not-allowed">
  Text
</Button>`

# Cards & Containers

### Standard Card
`
<Card className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
  Content
</Card>`

### Accent Card (offers, featured)

`<Card className="bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20 border-2 border-accent-300 dark:border-accent-700">
  Content
</Card>`

### Success Card

`<Card className="bg-success-50 dark:bg-success-900/20 border border-success-200 dark:border-success-800">
  Content
</Card>`

### Warning Card

`<Card className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
  Card
</Card>`

### Error Card

`<Card className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
  Card
</Card>`

### Interactive Card

`<Card className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-brand-400 dark:hover:border-brand-500 cursor-pointer transition-all hover:shadow-lg">
  Click me
</Card>`

# Borders & Dividers

### Subtle Border

`className="border border-neutral-200 dark:border-neutral-700"`

### Medium Border
`className="border-2 border-neutral-300 dark:border-neutral-600"`

### Accent Border (selection etc)
`className="border-2 border-brand-500 dark:border-brand-400"`

### Success Border
`className="border-2 border-success-500 dark:border-success-400"`

### Horizontal Divider
`<hr className="border-t border-neutral-200 dark:border-neutral-700 my-4" />`

### Gradient Border
`className="border-2 border-transparent bg-gradient-to-r from-brand-500 to-accent-500 bg-clip-border"`

# Texts

### Primary Heading 

`<h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-50"> Text </h1>`

### Secondary Heading

```<h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100"> Text </h2>```

### Text Body Primary
`<p className="text-base text-neutral-700 dark:text-neutral-300">
  Text </p>`

### Text Secondary 
`<span className="text-sm text-neutral-600 dark:text-neutral-400">
  Text </span>`

### Muted Text
`<span className="text-xs text-neutral-500 dark:text-neutral-500">
  Text </span>`

### Text Link
`<a className="text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 underline">
  Link </a>`

### Success Text
`<span className="text-success-600 dark:text-success-400 font-medium">
  Text </span>`

### Error Text
`<span className="text-red-600 dark:text-red-400 font-medium">
  Text
</span>`

### Accent Text
`<span className="text-accent-600 dark:text-accent-400 font-bold text-xl">
  Text
</span>`

### Price Text
`<span className="text-3xl font-bold text-brand-600 dark:text-brand-400">
  299 RON
</span>`

# Backgrounds

### Primary Background (Page background)
`className="bg-neutral-50 dark:bg-neutral-900"`

### Secondary Background
`className="bg-neutral-100 dark:bg-neutral-800"`

### Card Background
`className="bg-white dark:bg-neutral-800"`

### Hover Background
`className="hover:bg-neutral-100 dark:hover:bg-neutral-800"`

### Accent Background (Light)
`className="bg-accent-50 dark:bg-accent-900/10"`

### Hero Sections Background
`className="bg-brand-50 dark:bg-brand-900/10"`

### Success Background
`className="bg-success-50 dark:bg-success-900/10"`

### Gradient Background
`className="bg-gradient-to-r from-brand-500 to-accent-500 text-white"`

### Subtle Gradient Background
`className="bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800"`

# Badges & Tags

### New/Featured Badge
`<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-500 text-white">
  Text
</span>`

### Discound Badge
`<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-accent-500 text-white">
  Text
</span>`

### In Stock Badge
`<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-400">
  Text
</span>`

### Limited Stock Badge
`<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">
  Text
</span>`

### Unavailable Badge
`<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400">
  Text
</span>`

### Category Badge
`<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-600">
  Text
</span>`

# Forms & Inputs

### Standard Input
`<input 
  className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:focus:ring-brand-400 focus:border-transparent"
  placeholder="Text"
/>`

### Input Error
`<input 
  className="w-full px-4 py-2 border-2 border-red-500 dark:border-red-400 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-red-500"
/>`

### Input Success
`<input 
  className="w-full px-4 py-2 border-2 border-success-500 dark:border-success-400 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
/>`

### Input Disabled
`<input 
  disabled
  className="w-full px-4 py-2 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-neutral-100 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-500 cursor-not-allowed"
/>`

### Select/Dropdown
`<select className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-brand-500"> <option>First Option</option> </select>`

### Checkbox/Radio
`<input 
  type="checkbox"
  className="w-4 h-4 text-brand-500 border-neutral-300 dark:border-neutral-600 rounded focus:ring-brand-500 dark:focus:ring-brand-400"
/>`

# Navigation & Menu

### Navbar Link Active
```<a className="px-4 py-2 text-brand-600 dark:text-brand-400 font-medium border-b-2 border-brand-500"> Text </a>```

### Navbar Link Inactive
```<a className="px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"> Text </a>```

### Dropdown Menu Item
```<button className="w-full px-4 py-2 text-left text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"> Text </button>```

### Breadcrumb
```<nav className="flex text-sm text-neutral-600 dark:text-neutral-400"> <a className="hover:text-brand-600 dark:hover:text-brand-400">Text1</a> <span className="mx-2">/</span> <a className="hover:text-brand-600 dark:hover:text-brand-400">Text2</a> <span className="mx-2">/</span> <span className="text-neutral-900 dark:text-neutral-100">Text3</span> </nav>```

# Alerts & Notifications

### Alert Success
`<div className="p-4 rounded-lg bg-success-50 dark:bg-success-900/20 border border-success-200 dark:border-success-800 text-success-800 dark:text-success-300"> text </div>`

### Alert Error
`<div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-300"> text </div>`

### Alert Warning
`<div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300"> Text </div>`

### Alert Info
`<div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-300"> Text </div>`

# Shadows

### Shadow Colored (Brand accent)
`className="shadow-lg shadow-brand-500/20 dark:shadow-brand-400/20"`

### Shadow on Hover
`className="shadow-sm hover:shadow-lg transition-shadow"`