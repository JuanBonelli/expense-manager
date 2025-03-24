"use client";

import React, { FormEvent, useEffect, useState } from "react";
import { InputForm } from "../InputForm";
import SelectForm from "../SelectForm";
import { Button } from "../ui/button";
import { Master, Movement } from "@/utils/types";
import { toast, Toaster } from "sonner";

interface MovementForm {
  editable: boolean;
}

interface CategoryResponse {
  data: Master[];
}

const MovementCreationForm = () => {
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
        editable={true}
      />

      <InputForm
        name={"amount"}
        label={"Monto"}
        type="number"
        error={errors.amount !== ""}
        errorMessage={errors.amount}
        placeholder={"Ingrese un monto"}
        editable={true}
      />

      <InputForm
        name={"description"}
        label={"Descripción"}
        placeholder={"Ingrese una descripción "}
        error={errors.description !== ""}
        errorMessage={errors.description}
        editable={true}
      />

      <SelectForm
        name={"category"}
        label="Categoría"
        placeholder="Ingrese una categoría"
        options={categories}
        error={errors.category !== ""}
        errorMessage={errors.category}
        editable={true}
      />

      <Button className="mt-auto" type="submit">
        Crear
      </Button>

      <Toaster position="bottom-center" duration={2000} />
    </form>
  );
};

export default MovementCreationForm;
