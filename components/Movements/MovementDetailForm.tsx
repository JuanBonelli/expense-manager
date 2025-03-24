"use client";

import React, { useEffect, useState } from "react";
import { InputForm } from "../InputForm";
import { Button } from "../ui/button";
import { Toaster } from "../ui/sonner";
import { toast } from "sonner";
import { Master, Movement } from "@/utils/types";
import SelectForm from "../SelectForm";
import { TrashIcon } from "@heroicons/react/24/outline";

interface CategoryResponse {
  data: Master[];
}

const MovementDetailForm = ({
  movement,
  editable,
}: {
  movement: Movement;
  editable: boolean;
}) => {
  const [categories, setCategories] = useState<Master[]>([]);
  const [errors, setErrors] = useState<{
    title: string;
    amount: string;
    description: string;
    category: string;
  }>({
    title: "",
    amount: "",
    description: "",
    category: "",
  });

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    fetch("http://localhost:3000/api/category")
      .then((res: any) => res.json())
      .then((res: CategoryResponse) => {
        setCategories(res.data);
      });
  };

  const submitMovement = (formData: FormData) => {
    fetch(
      `http://localhost:3000/api/account/${"67d83129c3545ad022a96e84"}/movement`,
      {
        method: "POST",
        body: JSON.stringify({
          title: formData.get("title"),
          description: formData.get("description"),
          amount: formData.get("amount"),
          categoryId: formData.get("category"),
          accountId: "67d83129c3545ad022a96e84",
        }),
      },
    )
      .then((res: any) => res.json())
      .then((res: any) => {
        toast("Creado", {
          description: "El Movimiento ha sido creado correctamente!",
        });

        window.location.href = "/account/67d83129c3545ad022a96e84/movements";
      });
  };

  const validateForm = (form: FormData) => {
    var validations: {
      title: string;
      amount: string;
      description: string;
      category: string;
    } = {
      title: "",
      amount: "",
      description: "",
      category: "",
    };

    if (!form.get("title"))
      validations["title"] = "Este campo no puede estar vacío.";
    if (!form.get("amount"))
      validations["amount"] = "Este campo no puede estar vacío.";
    if (!form.get("description"))
      validations["description"] = "Este campo no puede estar vacío.";
    if (!form.get("category"))
      validations["category"] = "Este campo no puede estar vacío";

    setErrors(validations);

    var hasErrors = Object.values(validations).some((value) => value !== "");
    if (!hasErrors) {
      submitMovement(form);
    }
  };

  return (
    <form action={validateForm} className="flex h-full flex-col gap-4">
      <InputForm
        name={"title"}
        label={"Título"}
        error={errors.title !== ""}
        errorMessage={errors.title}
        placeholder={"Ingrese un título"}
        value={movement.title}
        editable={editable}
      />

      <InputForm
        name={"amount"}
        label={"Monto"}
        type="number"
        error={errors.amount !== ""}
        errorMessage={errors.amount}
        placeholder={"Ingrese un monto"}
        value={movement.amount}
        editable={editable}
      />

      <InputForm
        name={"description"}
        label={"Descripción"}
        placeholder={"Ingrese una descripción "}
        error={errors.description !== ""}
        errorMessage={errors.description}
        value={movement.description}
        editable={editable}
      />

      <SelectForm
        name={"category"}
        label={"Categoría"}
        placeholder={"Ingrese una categoría "}
        error={errors.description !== ""}
        errorMessage={errors.description}
        selectedKey={movement.categoryId}
        options={categories}
        editable={editable}
      />

      <Button className="mt-auto" variant={"destructive"} size={"default"}>
        <TrashIcon className="text-slate-50" />
        Eliminar
      </Button>

      <Toaster position="bottom-center" duration={2000} />
    </form>
  );
};

export default MovementDetailForm;
