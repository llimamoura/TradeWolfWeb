import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchInputProps {
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export function SearchInput({
  placeholder = "Search",
  className = "",
  value,
  onChange,
}: SearchInputProps) {
  return (
    <div className={`relative ${className}`}>
      <Input
        className="pr-10 pl-2 w-full h-10 text-primary text-sm font-medium"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
      <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 size-5 text-muted-foreground" />
    </div>
  );
}
