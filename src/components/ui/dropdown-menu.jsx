import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "../../lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

/**
 * Creates a customizable sub-trigger component for a dropdown menu
 * @param {Object} props - The properties passed to the component
 * @param {string} [props.className] - Additional CSS classes to apply to the component
 * @param {boolean} [props.inset] - Determines if the component should have inset padding
 * @param {React.ReactNode} props.children - The content to be rendered inside the component
 * @param {React.Ref} ref - A ref object to access the underlying DOM element
 * @returns {React.ReactElement} A styled and configurable dropdown menu sub-trigger component
 */
const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    )}
    {...props}>
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

/**
 * Creates a dropdown menu sub-content component with customizable styling and animations.
 * @param {Object} props - The properties passed to the component.
 * @param {string} [props.className] - Additional CSS classes to apply to the component.
 * @param {React.Ref} ref - The ref object for the component.
 * @returns {React.ReactElement} A styled and animated dropdown menu sub-content component.
 */
const DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props} />
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

/**
 * A customizable dropdown menu content component using React and DropdownMenuPrimitive.
 * @param {Object} props - The component props.
 * @param {string} [props.className] - Additional CSS classes to apply to the content.
 * @param {number} [props.sideOffset=4] - The offset from the side of the trigger.
 * @param {React.Ref} ref - The forwarded ref for the content element.
 * @returns {React.Element} A styled and animated dropdown menu content component.
 */
const DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        /**
         * A customizable dropdown menu item component using React and Radix UI Primitive.
         * @param {Object} props - The properties passed to the component.
         * @param {string} [props.className] - Additional CSS classes to apply to the item.
         * @param {boolean} [props.inset] - Whether to apply left padding for inset styling.
         * @param {React.Ref} ref - Forwarded ref to access the underlying DOM element.
         * @returns {React.ReactElement} A styled and accessible dropdown menu item.
         */
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props} />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      /**
       * A customizable checkbox item component for dropdown menus.
       * @param {Object} props - The component props.
       * @param {string} [props.className] - Additional CSS class names for styling.
       * @param {React.ReactNode} props.children - The content to be rendered inside the checkbox item.
       * @param {boolean} props.checked - The checked state of the checkbox.
       * @param {React.Ref} ref - A ref to be attached to the component.
       * @returns {React.ReactElement} A styled checkbox item for use in dropdown menus.
       */
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props} />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    /**
     * A custom React component that renders a radio item within a dropdown menu.
     * @param {Object} props - The properties passed to the component.
     * @param {string} [props.className] - Additional CSS class names to apply to the component.
     * @param {React.ReactNode} props.children - The content to be rendered inside the radio item.
     * @param {React.Ref} ref - A forwarded ref to be attached to the underlying DOM element.
     * @returns {React.ReactElement} A styled radio item component for use in dropdown menus.
     */
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}>
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}>
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      ```
      /**
       * A separator component for dropdown menus, using React's forwardRef and DropdownMenuPrimitive.Separator.
       * @param {Object} props - The props for the component.
       * @param {string} [props.className] - Additional CSS classes to apply to the separator.
       * @param {React.Ref} ref - The ref to be forwarded to the underlying DropdownMenuPrimitive.Separator.
       * @returns {React.ReactElement} A styled separator element for use in dropdown menus.
       */
      ```
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

/**
 * A customizable dropdown menu label component with optional inset styling.
 * @param {Object} props - The component props.
 * @param {string} [props.className] - Additional CSS classes to apply to the label.
 * @param {boolean} [props.inset] - Whether to apply inset padding to the label.
 * @param {React.Ref} ref - The forwarded ref for the label element.
 * @returns {React.Element} A styled dropdown menu label component.
 */
const DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    {...props} />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props} />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

/**
 * Renders a span element for displaying a shortcut in a dropdown menu
 * @param {object} props - The component props
 * @param {string} [props.className] - Additional CSS classes to apply to the span
 * @returns {JSX.Element} A span element with the provided className and other props
 */
const DropdownMenuShortcut = ({
  className,
  ...props
}) => {
  return (
    (<span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props} />)
  );
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
