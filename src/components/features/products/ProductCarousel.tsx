import React, { useId } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { AppPromoCard } from "../../common/AppPromoCard";
import { ProductCard } from "../../../pages/Product/ProductCard";
import { ProductType } from "../../../types/product/product";

interface ProductCarouselProps {
  title: string;
  products: ProductType[];
  showPromoCard?: boolean;
}

// Definim un număr minim de sloturi vizuale pe care vrem să le avem mereu
// Dacă ai produse puține, restul vor fi completate cu acest placeholder
const MIN_SLOTS_TO_DISPLAY = 6; 

export const ProductCarousel: React.FC<ProductCarouselProps> = ({
  title,
  products,
  showPromoCard = false,
}) => {
  const uniqueId = useId().replace(/:/g, "");
  const nextClass = `swiper-next-${uniqueId}`;
  const prevClass = `swiper-prev-${uniqueId}`;

  // Calculăm câte sloturi goale avem nevoie
  // Dacă avem 2 produse, și vrem minim 6, vom genera 4 placeholders
  const totalItems = products.length + (showPromoCard ? 1 : 0);
  const emptySlotsCount = Math.max(0, MIN_SLOTS_TO_DISPLAY - totalItems);
  const emptySlots = Array.from({ length: emptySlotsCount });

  // Dezactivăm loop-ul dacă avem puține produse, altfel Swiper se comportă ciudat
  const shouldLoop = totalItems > MIN_SLOTS_TO_DISPLAY;

  return (
    <Box className="mt-12 relative group">
      <Typography variant="h4" component="h2" className="font-bold mb-6">
        {title}
      </Typography>

      <Box className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          // IMPORTANT: watchOverflow ascunde navigarea și blochează swipe 
          // dacă elementele (produse + placeholders) încap toate pe ecran
          watchOverflow={true} 
          loop={shouldLoop}
          slidesPerView={"auto"}
          navigation={{
            nextEl: `.${nextClass}`,
            prevEl: `.${prevClass}`,
          }}
          className="!py-4 flex" // 'flex' ajută la alinierea corectă când nu e scroll
        >
          {showPromoCard && (
            <SwiperSlide className="!w-auto h-80">
              <AppPromoCard />
            </SwiperSlide>
          )}

          {/* Renderizare Produse Reale */}
          {products.map((product, index) => (
            <SwiperSlide key={`prod-${index}`} className="!w-[210px] !h-80">
              <ProductCard product={product}></ProductCard>
            </SwiperSlide>
          ))}

          {/* Renderizare Placeholders (Sloturi goale) */}
          {emptySlots.map((_, index) => (
            <SwiperSlide key={`empty-${index}`} className="!w-[210px] !h-80">
               {/* Aici poți stiliza slotul gol cum dorești */}
               <Box className="w-full h-full rounded-xl border-2 border-dashed border-neutral-200 dark:border-neutral-700 flex items-center justify-center bg-neutral-50 dark:bg-neutral-900/50">
                  {/* Poți lăsa gol sau poți pune un icon/text discret */}
                  <Typography variant="body2" className="text-neutral-400 font-medium">
                    Empty Slot
                  </Typography>
               </Box>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Buton Previous - Swiper îl va ascunde automat via CSS (swiper-button-disabled) dacă watchOverflow se activează */}
        <IconButton
          className={`${prevClass} !absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white dark:bg-neutral-800 shadow-md border border-neutral-200 dark:border-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0`}
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%) translateX(-50%)",
            "&:hover": { bgcolor: "background.paper" },
          }}
        >
          <NavigateBeforeIcon />
        </IconButton>

        {/* Buton Next */}
        <IconButton
          className={`${nextClass} !absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white dark:bg-neutral-800 shadow-md border border-neutral-200 dark:border-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0`}
          sx={{
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%) translateX(50%)",
            "&:hover": { bgcolor: "background.paper" },
          }}
        >
          <NavigateNextIcon />
        </IconButton>
      </Box>
    </Box>
  );
};