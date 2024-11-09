import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function CommonForm({
  buttonText,
  formControls,
  formdata,
  setFormData,
}) {
  const handleChangeCatcher = (e) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const RegisterFormSubmitFunction = (e) => {
    e.preventDefault();
    console.log(formdata);
  };

  const renderInputsByComponentType = (controlItem) => {
    if (controlItem.componentType === "input") {
      return (
        <Input
          type={controlItem.type}
          placeholder={controlItem.placeholder}
          name={controlItem.name}
          required={controlItem.required}
          id={controlItem.name}
          onChange={handleChangeCatcher}
          value={formdata[controlItem.name] || ""}
        />
      );
    } else if (controlItem.componentType === "select") {
      return (
        <Select
          onValueChange={(value) =>
            setFormData({ ...formdata, [controlItem.name]: value })
          }
        >
          <SelectTrigger id={controlItem.name}>
            <SelectValue
              placeholder={controlItem.placeholder || "Select an option"}
            />
          </SelectTrigger>
          <SelectContent>
            {controlItem.options.map((option) => (
              <SelectItem key={option.id} value={option.id}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      );
    } else {
      return (
        <Input
          type={controlItem.type}
          placeholder={controlItem.placeholder}
          name={controlItem.name}
          required={controlItem.required}
          id={controlItem.name}
          onChange={handleChangeCatcher}
          value={formdata[controlItem.name] || ""}
        />
      );
    }
  };

  return (
    <form onSubmit={RegisterFormSubmitFunction}>
      <div className="flex flex-col gap-3">
        {formControls.map((controlItem) => (
          <div key={controlItem.name} className="grid w-full gap-1.5">
            {controlItem.label && (
              <label
                htmlFor={controlItem.name}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {controlItem.label}
              </label>
            )}
            {renderInputsByComponentType(controlItem)}
          </div>
        ))}
      </div>
      <Button type="submit" className="mt-4 w-full">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
}
