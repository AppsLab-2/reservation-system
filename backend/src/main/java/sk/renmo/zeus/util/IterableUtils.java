package sk.renmo.zeus.util;

import java.util.HashSet;
import java.util.Set;

public class IterableUtils {

    public static <T> Set<T> toSet(Iterable<T> iterable) {
        Set<T> set = new HashSet<>();
        iterable.forEach(set::add);
        return set;
    }

}
