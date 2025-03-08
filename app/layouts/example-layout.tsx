export default function ExampleLayout({
  children,
  menu,
}: Readonly<{ children: React.ReactNode; menu: React.ReactNode }>) {
  return (
    <div className="space-y-4">
      <div>{menu}</div>
      <div className="flex h-[400px] justify-center items-center">{children}</div>
    </div>
  ) ;
}
