"use client";

import React, { ReactElement } from "react";
import { Button } from "./ui/button";
import { XMarkIcon } from "@heroicons/react/16/solid";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useRouter } from "next/navigation";

interface Heading {
  title: string;
  subtitle: string;
  onClickCallback?: () => void;
  showBackButton?: boolean;
  showActionButton?: boolean;
  actionButtonIcon?: ReactElement;
  actionWithDrawer?: boolean;
  size: "small" | "large" | "default";
}

const Heading = ({
  title,
  subtitle,
  onClickCallback,
  showBackButton = false,
  showActionButton = false,
  actionButtonIcon,
  actionWithDrawer,
  size,
}: Heading) => {
  const router = useRouter();
  const getTitleProperties = (size: "small" | "large" | "default"): string => {
    var titleProperties: string = "";

    switch (size) {
      case "small":
        titleProperties = "text-base text-slate-900";
        break;
      case "large":
        titleProperties = "text-2xl text-slate-900";
        break;
      case "default":
        titleProperties = "text-xl text-slate-900";
        break;
      default:
        titleProperties = "";
        break;
    }

    return titleProperties;
  };

  return (
    <div className="flex w-full justify-between">
      <div className="flex flex-col">
        <span className={`${getTitleProperties(size)} font-bold`}>{title}</span>
        <span className={`text-sm text-slate-500`}>{subtitle}</span>
      </div>

      <div
        className={`items-center gap-2 ${showBackButton ? "flex" : "hidden"}`}
      >
        {actionWithDrawer ? (
          <Drawer>
            <DrawerTrigger asChild>
              <Button
                size={"icon"}
                onClick={onClickCallback}
                className={`${showActionButton ? "flex" : "hidden"}`}
              >
                {actionButtonIcon}
              </Button>
            </DrawerTrigger>

            <DrawerContent>
              <div className="p-4">
                <DrawerHeader>
                  <DrawerTitle className="p-0 text-xl font-bold text-slate-900">
                    Filtros
                  </DrawerTitle>
                  <DrawerDescription className="text-sm text-slate-500">
                    Seleccion los filtros.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="flex flex-col gap-4 px-4">
                  <div>
                    <Label className="mb-2 text-slate-900">Título:</Label>
                    <Input readOnly className="text-sm" value={"Esquirla"} />
                  </div>
                  <div>
                    <Label className="mb-2 text-slate-900">
                      Fecha de Creación:
                    </Label>
                    <Input
                      readOnly
                      className="text-sm"
                      value={"Marzo 19, 2025"}
                    />
                  </div>

                  <div>
                    <Label className="mb-4 text-slate-900">Monto Mínimo:</Label>
                    <Slider
                      className="text-sm"
                      content="1"
                      defaultValue={[20000]}
                      max={1000000}
                      step={1}
                    />
                  </div>
                </div>

                <DrawerFooter className="mt-8">
                  <Button>Confirmar</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancelar</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        ) : (
          <Button
            size={"icon"}
            onClick={onClickCallback}
            className={`${showActionButton ? "flex" : "hidden"}`}
          >
            {actionButtonIcon}
          </Button>
        )}

        <Button
          size={"icon"}
          variant={"outline"}
          onClick={() => router.back()}
          className={`${showBackButton ? "flex" : "hidden"}`}
        >
          <XMarkIcon className="h-6" />
        </Button>
      </div>
    </div>
  );
};

export default Heading;
