"use client";
import { Switch } from "@/components/ui/switch";
import { AlignJustify, LayoutGrid } from "lucide-react";

/**
 * @description:toggle the view mode of the posts
 */
export function ViewModeToggle({
  checked,
  onCheckedChange,
}: {
  checked: boolean;
  onCheckedChange: (newValue: boolean) => void;
}) {
  return (
    <div className="view-mode-toggle">
      <div className="flex items-center space-x-2">
        <AlignJustify />
        <Switch
          id="airplane-mode"
          checked={checked}
          onCheckedChange={onCheckedChange}
        />
        <LayoutGrid />
      </div>
    </div>
  );
}
